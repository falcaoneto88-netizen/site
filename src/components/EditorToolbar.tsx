import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, Eye, Upload, Trash2, Command, Loader2 } from 'lucide-react';
import { useEditor } from '../context/EditorContext';

export const EditorToolbar = () => {
  const { isEditMode, toggleEditMode, publishChanges, clearChanges, isPublishing } = useEditor();

  // Show toolbar when URL has ?editor=true OR on specific landing pages
  const isEditorEnabled = typeof window !== 'undefined' && (
    new URLSearchParams(window.location.search).get('editor') === 'true' ||
    window.location.pathname.includes('/dr-joao-falcao')
  );
  if (!isEditorEnabled) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100vw-24px)] max-w-fit">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-dark px-3 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-border/40 shadow-2xl flex items-center gap-2 sm:gap-4 flex-wrap justify-center"
      >
        <div className="hidden sm:flex items-center gap-2 border-r border-border/50 pr-4 mr-1">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <Command className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-foreground uppercase tracking-widest leading-none">Editor</p>
            <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">v2.0</p>
          </div>
        </div>

        <button
          onClick={toggleEditMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all text-[11px] sm:text-xs font-semibold ${
            isEditMode
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/60'
          }`}
        >
          {isEditMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          {isEditMode ? 'Sair' : 'Editar'}
        </button>

        <AnimatePresence>
          {isEditMode && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-2"
            >
              <button
                onClick={publishChanges}
                disabled={isPublishing}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-accent text-accent-foreground font-semibold text-[11px] sm:text-xs shadow-lg shadow-accent/20 disabled:opacity-50"
              >
                {isPublishing ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                {isPublishing ? '...' : 'Publicar'}
              </button>

              <button
                onClick={() => {
                  if (confirm('Deseja limpar todos os ajustes e começar do zero?')) {
                    clearChanges();
                    window.location.reload();
                  }
                }}
                className="p-1.5 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                title="Limpar tudo"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
