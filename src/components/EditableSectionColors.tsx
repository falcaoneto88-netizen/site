import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEditor } from '../context/EditorContext';
import { Palette, X, RotateCcw } from 'lucide-react';

const EDITOR_Z_INDEX = 2147483647;

export interface ColorDef {
  id: string;
  label: string;
  defaultColor: string;
  /** CSS property to apply, e.g. 'backgroundColor', 'color', 'borderColor' */
  cssProperty: string;
}

interface EditableSectionColorsProps {
  sectionId: string;
  colors: ColorDef[];
  children: (resolvedColors: Record<string, string>) => React.ReactNode;
}

export const EditableSectionColors: React.FC<EditableSectionColorsProps> = ({
  sectionId,
  colors,
  children,
}) => {
  const { isEditMode, content, updateContent } = useEditor();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [btnRect, setBtnRect] = useState<DOMRect | null>(null);

  const resolvedColors: Record<string, string> = {};
  colors.forEach((c) => {
    const saved = content[`${sectionId}_color_${c.id}`];
    resolvedColors[c.id] = typeof saved === 'string' ? saved : c.defaultColor;
  });

  const handleColorChange = useCallback(
    (colorId: string, value: string) => {
      updateContent(`${sectionId}_color_${colorId}`, value);
    },
    [sectionId, updateContent]
  );

  const handleReset = useCallback(() => {
    colors.forEach((c) => {
      updateContent(`${sectionId}_color_${c.id}`, undefined);
    });
  }, [colors, sectionId, updateContent]);

  const syncBtnRect = useCallback(() => {
    if (btnRef.current) {
      setBtnRect(btnRef.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    if (!isEditMode) {
      setIsPanelOpen(false);
      return;
    }

    window.addEventListener('scroll', syncBtnRect, true);
    window.addEventListener('resize', syncBtnRect);
    return () => {
      window.removeEventListener('scroll', syncBtnRect, true);
      window.removeEventListener('resize', syncBtnRect);
    };
  }, [isEditMode, syncBtnRect]);

  useEffect(() => {
    if (!isEditMode || !isPanelOpen) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (panelRef.current?.contains(target)) return;
      if (btnRef.current?.contains(target)) return;
      if (target.closest?.(`[data-section-color-panel="${sectionId}"]`)) return;
      setIsPanelOpen(false);
    };

    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [isEditMode, isPanelOpen, sectionId]);

  const portal =
    isEditMode &&
    isPanelOpen &&
    btnRect &&
    createPortal(
      <div
        ref={panelRef}
        data-section-color-panel={sectionId}
        style={{
          position: 'fixed',
          top: Math.min(btnRect.bottom + 8, window.innerHeight - 300),
          left: Math.max(8, Math.min(btnRect.left, window.innerWidth - Math.min(260, window.innerWidth - 16))),
          width: Math.min(260, window.innerWidth - 16),
          zIndex: EDITOR_Z_INDEX,
          pointerEvents: 'auto',
        }}
        className="rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur p-3 space-y-3"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Cores da Seção</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleReset}
              className="p-1 rounded hover:bg-muted text-muted-foreground"
              title="Resetar cores"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setIsPanelOpen(false)}
              className="p-1 rounded hover:bg-muted text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {colors.map((c) => (
            <div key={c.id} className="flex items-center gap-2">
              <label className="flex items-center gap-2 flex-1 cursor-pointer">
                <input
                  type="color"
                  value={resolvedColors[c.id]}
                  onChange={(e) => handleColorChange(c.id, e.target.value)}
                  className="w-7 h-7 rounded-md border border-border cursor-pointer p-0 bg-transparent"
                  style={{ appearance: 'none', WebkitAppearance: 'none' }}
                />
                <span className="text-[11px] text-foreground/80 font-medium">{c.label}</span>
              </label>
              <span className="text-[9px] text-muted-foreground font-mono uppercase">
                {resolvedColors[c.id]}
              </span>
            </div>
          ))}
        </div>
      </div>,
      document.body
    );

  return (
    <div className="relative">
      {children(resolvedColors)}

      {isEditMode && (
        <button
          ref={btnRef}
          type="button"
          style={{ zIndex: EDITOR_Z_INDEX, position: 'absolute', top: 12, right: 12 }}
          onClick={(e) => {
            e.stopPropagation();
            syncBtnRect();
            setIsPanelOpen((prev) => !prev);
          }}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background/95 border border-border text-xs font-medium text-foreground shadow-lg pointer-events-auto"
        >
          <Palette className="w-3.5 h-3.5" />
          Cores
        </button>
      )}

      {portal}
    </div>
  );
};
