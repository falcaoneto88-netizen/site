import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { falcaoDefaults } from '../data/falcaoDefaults';

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

const STORAGE_VERSION = 'v3';
const getStorageKey = (pid: string) => `editor_draft_${pid}_${STORAGE_VERSION}`;
const getPublishedKey = (pid: string) => `editor_published_${pid}_${STORAGE_VERSION}`;

export const EditorProvider: React.FC<{ children: React.ReactNode; projectId?: string }> = ({ children, projectId = 'default' }) => {
  const STORAGE_KEY = getStorageKey(projectId);
  const PUBLISHED_KEY = getPublishedKey(projectId);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  // Published = static defaults merged with any saved published overrides from localStorage
  const [published, setPublished] = useState<Record<string, unknown>>(() => {
    const saved = typeof window !== 'undefined'
      ? parseStoredContent(window.localStorage.getItem(PUBLISHED_KEY))
      : {};
    return { ...falcaoDefaults, ...saved };
  });

  // Draft = in-progress edits not yet "published"
  const [draft, setDraft] = useState<Record<string, unknown>>(() =>
    typeof window === 'undefined' ? {} : parseStoredContent(window.localStorage.getItem(STORAGE_KEY))
  );

  const safeSetItem = useCallback((key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      try {
        window.localStorage.removeItem(PUBLISHED_KEY);
        window.localStorage.removeItem(STORAGE_KEY);
        window.localStorage.setItem(key, value);
      } catch {
        console.warn(`[EditorSync] Não foi possível salvar no localStorage`);
      }
    }
  }, [PUBLISHED_KEY, STORAGE_KEY]);

  // Persist drafts to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    safeSetItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, safeSetItem, STORAGE_KEY]);

  // Merge published + draft for the active content
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

  // "Publish" saves overrides to localStorage (no Supabase)
  const publishChanges = useCallback(async () => {
    if (Object.keys(draft).length === 0) return;
    setIsPublishing(true);
    try {
      const newPublished = { ...published, ...draft };
      setPublished(newPublished);
      setDraft({});

      // Save only the overrides (differences from falcaoDefaults) to save space
      const overrides: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(newPublished)) {
        if (JSON.stringify(falcaoDefaults[key]) !== JSON.stringify(value)) {
          overrides[key] = value;
        }
      }
      safeSetItem(PUBLISHED_KEY, JSON.stringify(overrides));
      window.localStorage.removeItem(STORAGE_KEY);
      alert('Alterações salvas com sucesso!');
    } catch (err) {
      console.error('Erro ao salvar:', err);
      alert('Erro ao salvar. Tente novamente.');
    } finally {
      setIsPublishing(false);
    }
  }, [draft, published, safeSetItem, PUBLISHED_KEY, STORAGE_KEY]);

  const clearChanges = useCallback(() => {
    setDraft({});
    window.localStorage.removeItem(STORAGE_KEY);
  }, [STORAGE_KEY]);

  const value = useMemo(
    () => ({ isEditMode, toggleEditMode, content, updateContent, publishChanges, clearChanges, isPublishing, isLoaded: true }),
    [isEditMode, content, updateContent, publishChanges, clearChanges, isPublishing]
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
