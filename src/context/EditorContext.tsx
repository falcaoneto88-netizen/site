import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { supabase as supabaseClient } from '../integrations/supabase/client';

interface EditorContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  content: Record<string, unknown>;
  updateContent: (id: string, value: unknown) => void;
  publishChanges: () => Promise<void>;
  clearChanges: () => void;
  isPublishing: boolean;
  isLoaded: boolean;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

const parseStoredContent = (raw: string | null): Record<string, unknown> => {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};

const STORAGE_VERSION = 'v2';
const getStorageKey = (pid: string) => `editor_draft_${pid}_${STORAGE_VERSION}`;
const getCacheKey = (pid: string) => `editor_cache_${pid}_${STORAGE_VERSION}`;
const getLegacyStorageKey = (pid: string) => `editor_draft_${pid}`;
const getLegacyCacheKey = (pid: string) => `editor_cache_${pid}`;

export const EditorProvider: React.FC<{ children: React.ReactNode; projectId?: string }> = ({ children, projectId = 'default' }) => {
  const STORAGE_KEY = getStorageKey(projectId);
  const CACHE_KEY = getCacheKey(projectId);

  // Resolve slug to UUID for DB operations
  const [resolvedProjectId, setResolvedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(projectId);
    if (isUuid) {
      setResolvedProjectId(projectId);
      return;
    }
    supabaseClient.from('projects').select('id').eq('slug', projectId).maybeSingle().then(({ data }) => {
      setResolvedProjectId(data?.id ?? null);
    });
  }, [projectId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(getLegacyCacheKey(projectId));
      window.localStorage.removeItem(getLegacyStorageKey(projectId));
    } catch {
      // noop
    }
  }, [projectId]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof window === 'undefined') return false;
    const cached = parseStoredContent(window.localStorage.getItem(getCacheKey(projectId)));
    return Object.keys(cached).length > 0;
  });

  const [published, setPublished] = useState<Record<string, unknown>>(() =>
    typeof window === 'undefined' ? {} : parseStoredContent(window.localStorage.getItem(CACHE_KEY))
  );

  const [draft, setDraft] = useState<Record<string, unknown>>(() =>
    typeof window === 'undefined' ? {} : parseStoredContent(window.localStorage.getItem(STORAGE_KEY))
  );

  const safeSetItem = useCallback((key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      try {
        window.localStorage.removeItem(CACHE_KEY);
        window.localStorage.removeItem(STORAGE_KEY);
        window.localStorage.setItem(key, value);
      } catch {
        console.warn(`[EditorSync] Não foi possível salvar no localStorage`);
      }
    }
  }, [CACHE_KEY, STORAGE_KEY]);

  const fetchPublished = useCallback(async () => {
    if (!resolvedProjectId) return;
    try {
      const { data, error } = await supabaseClient
        .from('project_content')
        .select('id, value, updated_at')
        .eq('project_id', resolvedProjectId);

      if (error || !data || data.length === 0) {
        setIsLoaded(true);
        return;
      }

      const map: Record<string, unknown> = {};
      data.forEach((row: any) => {
        map[row.id] = row.value;
      });

      setPublished(map);
      safeSetItem(CACHE_KEY, JSON.stringify(map));
      setIsLoaded(true);
    } catch (err) {
      console.error('[EditorSync] Erro:', err);
      setIsLoaded(true);
    }
  }, [safeSetItem, resolvedProjectId, CACHE_KEY]);

  const hasSyncedRef = useRef(false);
  const lastRealtimeSyncRef = useRef<number>(0);
  useEffect(() => {
    if (!resolvedProjectId || hasSyncedRef.current) return;
    hasSyncedRef.current = true;
    // Clear stale cache before fetching fresh data
    try { window.localStorage.removeItem(CACHE_KEY); } catch {}
    fetchPublished();
  }, [fetchPublished, resolvedProjectId, CACHE_KEY]);

  useEffect(() => {
    if (!resolvedProjectId) return;

    const channel = supabaseClient
      .channel(`content_changes_${resolvedProjectId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'project_content',
          filter: `project_id=eq.${resolvedProjectId}`,
        },
        () => {
          lastRealtimeSyncRef.current = Date.now();
          fetchPublished();
        }
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [fetchPublished, resolvedProjectId]);

  useEffect(() => {
    if (!resolvedProjectId || typeof window === 'undefined') return;

    const interval = window.setInterval(() => {
      const msSinceRealtime = Date.now() - lastRealtimeSyncRef.current;
      if (msSinceRealtime > 6000) {
        fetchPublished();
      }
    }, 6000);

    return () => {
      window.clearInterval(interval);
    };
  }, [fetchPublished, resolvedProjectId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    safeSetItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, safeSetItem, STORAGE_KEY]);

  const content = useMemo(() => {
    const hasDraft = isEditMode && Object.keys(draft).length > 0;
    if (!hasDraft) return published;
    return { ...published, ...draft };
  }, [published, draft, isEditMode]);

  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  const updateContent = useCallback((id: string, value: unknown) => {
    setDraft((prev) => {
      const next = { ...prev };
      if (value === undefined) delete next[id];
      else next[id] = value;
      return next;
    });
  }, []);

  const publishChanges = useCallback(async () => {
    if (Object.keys(draft).length === 0 || !resolvedProjectId) return;
    // Check auth before attempting publish
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
      alert('Você precisa fazer login para publicar alterações. Acesse a página de autenticação primeiro.');
      return;
    }
    setIsPublishing(true);
    try {
      const entries = Object.entries(draft);
      const { error: upsertError } = await supabaseClient
        .from('project_content')
        .upsert(
          entries.map(([id, value]) => ({
            id,
            project_id: resolvedProjectId,
            value: value as any,
            updated_at: new Date().toISOString(),
          })),
          { onConflict: 'id,project_id' }
        );

      if (upsertError) {
        console.error('Erro ao publicar:', upsertError.message);
        alert(`Erro ao publicar: ${upsertError.message}`);
        return;
      }

      const newPublished = { ...published, ...draft };
      setPublished(newPublished);
      setDraft({});
      safeSetItem(CACHE_KEY, JSON.stringify(newPublished));
      window.localStorage.removeItem(STORAGE_KEY);
      alert('Alterações publicadas com sucesso!');
    } catch (err) {
      console.error('Erro ao publicar:', err);
      alert('Erro ao publicar. Tente novamente.');
    } finally {
      setIsPublishing(false);
    }
  }, [draft, published, resolvedProjectId, safeSetItem, CACHE_KEY, STORAGE_KEY]);

  const clearChanges = useCallback(() => {
    setDraft({});
    window.localStorage.removeItem(STORAGE_KEY);
  }, [STORAGE_KEY]);

  const value = useMemo(
    () => ({ isEditMode, toggleEditMode, content, updateContent, publishChanges, clearChanges, isPublishing, isLoaded }),
    [isEditMode, content, updateContent, publishChanges, clearChanges, isPublishing, isLoaded]
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor deve ser usado dentro de um EditorProvider');
  }
  return context;
};
