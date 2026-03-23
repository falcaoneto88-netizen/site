import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, Eye, Upload, Trash2, Layers, Loader2 } from 'lucide-react';
import { useEditor } from '../context/EditorContext';

export const EditorToolbar = () => {
  const { isEditMode, toggleEditMode, publishChanges, clearChanges, isPublishing } = useEditor();

  const isEditorEnabled = typeof window !== 'undefined' && (
    new URLSearchParams(window.location.search).get('editor') === 'true'
  );
  if (!isEditorEnabled) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100vw-24px)] max-w-fit">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/90 backdrop-blur-xl px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50 flex items-center gap-2 sm:gap-3 flex-wrap justify-center"
      >
        {/* Branding */}
        <div className="hidden sm:flex items-center gap-2 border-r border-white/[0.08] pr-3 mr-1">
          <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
            <Layers className="w-3 h-3 text-black" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">Editor</p>
            <p className="text-[9px] text-white/30 leading-tight mt-0.5">v2.0</p>
          </div>
        </div>

        {/* Edit toggle */}
        <button
          onClick={toggleEditMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all text-[11px] sm:text-xs font-semibold ${
            isEditMode
              ? 'bg-white text-black shadow-lg shadow-white/10'
              : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
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
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/[0.1] text-white font-semibold text-[11px] sm:text-xs border border-white/[0.08] hover:bg-white/[0.15] disabled:opacity-50 transition"
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
                className="p-1.5 rounded-xl text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-colors"
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
