import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEditor } from '../context/EditorContext';
import { Layers, X, RotateCcw } from 'lucide-react';

const EDITOR_Z_INDEX = 2147483647;

interface EditableSectionFadeProps {
  id: string;
  children: React.ReactNode;
  defaultTopColor?: string;
  defaultBottomColor?: string;
  defaultHeight?: string;
  hideTopFadeMobile?: boolean;
}

export const EditableSectionFade: React.FC<EditableSectionFadeProps> = ({
  id,
  children,
  defaultTopColor = '#0A0A0A',
  defaultBottomColor = '#0A0A0A',
  defaultHeight = '15',
  hideTopFadeMobile = false,
}) => {
  const { isEditMode, content, updateContent } = useEditor();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [btnPos, setBtnPos] = useState<{ top: number; left: number } | null>(null);

  const topColor = (content[`${id}_fade_top`] as string) || defaultTopColor;
  const bottomColor = (content[`${id}_fade_bottom`] as string) || defaultBottomColor;
  const fadeHeight = (content[`${id}_fade_height`] as string) || defaultHeight;

  const handleReset = useCallback(() => {
    updateContent(`${id}_fade_top`, undefined);
    updateContent(`${id}_fade_bottom`, undefined);
    updateContent(`${id}_fade_height`, undefined);
  }, [id, updateContent]);

  const syncPos = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const visibleTop = Math.max(rect.top, 60);
      const visibleBottom = Math.min(rect.bottom, window.innerHeight);
      if (visibleBottom - visibleTop < 30) {
        setBtnPos(null);
        return;
      }
      setBtnPos({ top: visibleTop + 8, left: rect.left + 8 });
    }
  }, []);

  useEffect(() => {
    if (!isEditMode) { setIsPanelOpen(false); return; }
    syncPos();
    window.addEventListener('scroll', syncPos, true);
    window.addEventListener('resize', syncPos);
    return () => {
      window.removeEventListener('scroll', syncPos, true);
      window.removeEventListener('resize', syncPos);
    };
  }, [isEditMode, syncPos]);

  useEffect(() => {
    if (!isEditMode || !isPanelOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (panelRef.current?.contains(t)) return;
      if (t.closest?.(`[data-fade-btn="${id}"]`)) return;
      setIsPanelOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [isEditMode, isPanelOpen, id]);

  // Both button and panel rendered via portal to avoid overflow:hidden clipping
  const editorPortal =
    isEditMode && btnPos &&
    createPortal(
      <>
        {/* Floating Fade button */}
        <button
          data-fade-btn={id}
          type="button"
          onClick={(e) => { e.stopPropagation(); setIsPanelOpen((p) => !p); }}
          style={{
            position: 'fixed',
            top: btnPos.top,
            left: btnPos.left,
            zIndex: EDITOR_Z_INDEX - 1,
            pointerEvents: 'auto',
            backgroundColor: '#7c3aed',
            border: '2px solid #a78bfa',
            color: '#fff',
            fontSize: 12,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 12px',
            borderRadius: 10,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
            transition: 'transform 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Layers style={{ width: 14, height: 14, color: '#22d3ee' }} />
          Fade
        </button>

        {/* Panel */}
        {isPanelOpen && (
          <div
            ref={panelRef}
            style={{
              position: 'fixed',
              top: Math.min(btnPos.top + 36, window.innerHeight - 220),
              left: btnPos.left,
              width: 230,
              zIndex: EDITOR_Z_INDEX,
              pointerEvents: 'auto',
            }}
            className="rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur p-3 space-y-3"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Fade da Seção</span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={handleReset} className="p-1 rounded hover:bg-muted text-muted-foreground" title="Resetar">
                  <RotateCcw className="w-3 h-3" />
                </button>
                <button type="button" onClick={() => setIsPanelOpen(false)} className="p-1 rounded hover:bg-muted text-foreground">
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="color" value={topColor} onChange={(e) => updateContent(`${id}_fade_top`, e.target.value)}
                  className="w-7 h-7 rounded-md border border-border cursor-pointer p-0 bg-transparent" />
                <span className="text-[11px] text-foreground/80 font-medium">Fade Superior</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="color" value={bottomColor} onChange={(e) => updateContent(`${id}_fade_bottom`, e.target.value)}
                  className="w-7 h-7 rounded-md border border-border cursor-pointer p-0 bg-transparent" />
                <span className="text-[11px] text-foreground/80 font-medium">Fade Inferior</span>
              </div>
              <div className="space-y-1">
                <span className="text-[11px] text-foreground/80 font-medium">Altura: {fadeHeight}%</span>
                <input type="range" min="5" max="50" value={fadeHeight}
                  onChange={(e) => updateContent(`${id}_fade_height`, e.target.value)}
                  className="w-full h-1.5 accent-primary" />
              </div>
            </div>
          </div>
        )}
      </>,
      document.body
    );

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const showTopFade = !(hideTopFadeMobile && isMobile);

  return (
    <div ref={containerRef} className="relative" style={{ isolation: 'isolate' }}>
      {/* Top fade */}
      {showTopFade && (
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{ height: `${fadeHeight}%`, background: `linear-gradient(to bottom, ${topColor}, transparent)`, zIndex: 1 }}
        />
      )}
      {/* Content */}
      <div className="relative editable-fade-content">{children}</div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: `${fadeHeight}%`, background: `linear-gradient(to top, ${bottomColor}, transparent)`, zIndex: 1 }}
      />
      {editorPortal}
    </div>
  );
};
