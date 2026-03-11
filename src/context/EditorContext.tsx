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

const getStorageKey = (pid: string) => `editor_draft_${pid}`;
const getCacheKey = (pid: string) => `editor_cache_${pid}`;

export const EditorProvider: React.FC<{ children: React.ReactNode; projectId?: string }> = ({ children, projectId = 'default' }) => {
  const STORAGE_KEY = getStorageKey(projectId);
  const CACHE_KEY = getCacheKey(projectId);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

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
    try {
      const { data, error } = await supabaseClient
        .from('project_content')
        .select('id, value, updated_at')
        .eq('project_id', projectId);

      if (error || !data || data.length === 0) return;

      const map: Record<string, unknown> = {};
      data.forEach((row: any) => {
        map[row.id] = row.value;
      });

      setPublished(map);
      safeSetItem(CACHE_KEY, JSON.stringify(map));
    } catch (err) {
      console.error('[EditorSync] Erro:', err);
    }
  }, [safeSetItem, projectId, CACHE_KEY]);

  const hasSyncedRef = useRef(false);
  useEffect(() => {
    if (hasSyncedRef.current) return;
    hasSyncedRef.current = true;
    const hasCachedContent = Object.keys(published).length > 0;
    if (hasCachedContent) {
      setTimeout(fetchPublished, 3000);
    } else {
      fetchPublished();
    }
  }, [fetchPublished]);

  useEffect(() => {
    const channel = supabaseClient
      .channel(`content_changes_${projectId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'project_content' },
        () => fetchPublished()
      )
      .subscribe();
    return () => { supabaseClient.removeChannel(channel); };
  }, [fetchPublished, projectId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    safeSetItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, safeSetItem, STORAGE_KEY]);

  const content = useMemo(() => {
    const hasDraft = Object.keys(draft).length > 0;
    if (!hasDraft) return published;
    return { ...published, ...draft };
  }, [published, draft]);

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
    if (Object.keys(draft).length === 0) return;
    setIsPublishing(true);
    try {
      const entries = Object.entries(draft);
      const { error: upsertError } = await supabaseClient
        .from('project_content')
        .upsert(
          entries.map(([id, value]) => ({
            id,
            project_id: projectId,
            value: value as any,
            updated_at: new Date().toISOString(),
          })),
          { onConflict: 'id' }
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
  }, [draft, published, projectId, safeSetItem, CACHE_KEY, STORAGE_KEY]);

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
