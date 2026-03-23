import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEditor } from '../context/EditorContext';
import { cn } from '../lib/utils';
import {
  Upload, Link, X, RotateCcw, Type, EyeOff, Eye,
  AlignLeft, AlignCenter, AlignRight, Bold, Minus, Plus,
  Move, ChevronUp, ChevronDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  Monitor, Smartphone
} from 'lucide-react';

/* ──────────────────────── useIsMobile Hook ──────────────────────── */

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
};

/* ──────────────────────── Text Style Types ──────────────────────── */

interface TextStyle {
  fontSize?: number;      // px
  fontWeight?: number;     // 100-900
  textAlign?: 'left' | 'center' | 'right';
  maxWidth?: number;       // px, 0 = none
  color?: string;          // hex color
}

const DEFAULT_TEXT_STYLE: TextStyle = {};

const resolveTextStyle = (value: unknown): TextStyle => {
  if (!value || typeof value !== 'object') return DEFAULT_TEXT_STYLE;
  return value as TextStyle;
};

/* ──────────────────────── Shared Constants ──────────────────────── */

const EDITOR_Z_INDEX = 2147483647;
const FONT_WEIGHT_OPTIONS = [300, 400, 500, 600, 700, 800, 900];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/* ══════════════════════════════════════════════════════════════════
   EditableText — now with font-size, weight, align, max-width
   ══════════════════════════════════════════════════════════════════ */

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultText,
  className,
  as: Component = 'span',
}) => {
  const { isEditMode, content, updateContent } = useEditor();
  const isMobile = useIsMobile();
  const text = typeof content[id] === 'string' ? (content[id] as string) : defaultText;

  // Responsive style keys: mobile uses _mobile_textStyle, desktop uses _textStyle
  const desktopStyleKey = `${id}_textStyle`;
  const mobileStyleKey = `${id}_mobile_textStyle`;
  const activeStyleKey = isMobile ? mobileStyleKey : desktopStyleKey;

  const desktopStyle = resolveTextStyle(content[desktopStyleKey]);
  const mobileStyle = resolveTextStyle(content[mobileStyleKey]);

  // On mobile: use mobile style, falling back to desktop style for unset properties
  // On desktop: use desktop style only
  const textStyle = useMemo(() => {
    if (!isMobile) return desktopStyle;
    return {
      fontSize: mobileStyle.fontSize || desktopStyle.fontSize,
      fontWeight: mobileStyle.fontWeight || desktopStyle.fontWeight,
      textAlign: mobileStyle.textAlign || desktopStyle.textAlign,
      maxWidth: mobileStyle.maxWidth || desktopStyle.maxWidth,
      color: mobileStyle.color || desktopStyle.color,
    };
  }, [isMobile, desktopStyle, mobileStyle]);

  // The "active" style for editing is the one matching current viewport
  const activeStyle = isMobile ? mobileStyle : desktopStyle;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showStylePanel, setShowStylePanel] = useState(false);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number } | null>(null);

  const inlineStyle = useMemo<React.CSSProperties>(() => {
    const s: React.CSSProperties = {};
    if (textStyle.fontSize) s.fontSize = `${textStyle.fontSize}px`;
    if (textStyle.fontWeight) s.fontWeight = textStyle.fontWeight;
    if (textStyle.textAlign) s.textAlign = textStyle.textAlign;
    if (textStyle.maxWidth) s.maxWidth = `${textStyle.maxWidth}px`;
    if (textStyle.color) s.color = textStyle.color;
    return s;
  }, [textStyle]);

  const saveStyle = useCallback(
    (patch: Partial<TextStyle>) => {
      const merged = { ...activeStyle, ...patch };
      const clean: TextStyle = {};
      if (merged.fontSize) clean.fontSize = merged.fontSize;
      if (merged.fontWeight) clean.fontWeight = merged.fontWeight;
      if (merged.textAlign) clean.textAlign = merged.textAlign;
      if (merged.maxWidth) clean.maxWidth = merged.maxWidth;
      if (merged.color) clean.color = merged.color;
      updateContent(activeStyleKey, Object.keys(clean).length > 0 ? clean : undefined);
    },
    [activeStyle, activeStyleKey, updateContent]
  );

  const syncPanelPos = useCallback(() => {
    if (!wrapperRef.current) return;
    const r = wrapperRef.current.getBoundingClientRect();
    setPanelPos({
      top: Math.max(8, r.top - 44),
      left: Math.max(8, Math.min(r.left, window.innerWidth - Math.min(360, window.innerWidth - 16))),
    });
  }, []);

  useEffect(() => {
    if (!showStylePanel) return;
    syncPanelPos();
    window.addEventListener('scroll', syncPanelPos, true);
    window.addEventListener('resize', syncPanelPos);
    return () => {
      window.removeEventListener('scroll', syncPanelPos, true);
      window.removeEventListener('resize', syncPanelPos);
    };
  }, [showStylePanel, syncPanelPos]);

  useEffect(() => {
    if (!isEditMode) setShowStylePanel(false);
  }, [isEditMode]);

  useEffect(() => {
    if (!showStylePanel) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest?.(`[data-text-style-panel="${id}"]`)) return;
      if (wrapperRef.current?.contains(t)) return;
      setShowStylePanel(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [showStylePanel, id]);

  if (!isEditMode) return <Component className={className} style={inlineStyle}>{text}</Component>;

  const portal =
    showStylePanel &&
    panelPos &&
    createPortal(
      <div
        data-text-style-panel={id}
        style={{
          position: 'fixed',
          top: panelPos.top,
          left: panelPos.left,
          zIndex: EDITOR_Z_INDEX,
          pointerEvents: 'auto',
        }}
        className="rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur p-2 flex items-center gap-2 flex-wrap max-w-[calc(100vw-16px)]"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Device indicator */}
        <div className="flex items-center gap-1 border-r border-border/50 pr-2">
          {isMobile ? (
            <Smartphone className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Monitor className="w-3.5 h-3.5 text-primary" />
          )}
          <span className="text-[9px] font-bold text-primary uppercase">
            {isMobile ? 'Mobile' : 'Desktop'}
          </span>
        </div>
        {/* Font Size */}
        <div className="flex items-center gap-1 border-r border-border/50 pr-2">
          <button
            type="button"
            onClick={() => saveStyle({ fontSize: Math.max(8, (textStyle.fontSize || 16) - 1) })}
            className="w-6 h-6 rounded flex items-center justify-center hover:bg-muted text-foreground"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-[10px] font-mono text-foreground w-7 text-center">
            {textStyle.fontSize || '—'}
          </span>
          <button
            type="button"
            onClick={() => saveStyle({ fontSize: Math.min(120, (textStyle.fontSize || 16) + 1) })}
            className="w-6 h-6 rounded flex items-center justify-center hover:bg-muted text-foreground"
          >
            <Plus className="w-3 h-3" />
          </button>
          <span className="text-[9px] text-muted-foreground">px</span>
        </div>

        {/* Font Weight */}
        <div className="flex items-center gap-1 border-r border-border/50 pr-2">
          <Bold className="w-3 h-3 text-muted-foreground" />
          <select
            value={textStyle.fontWeight || ''}
            onChange={(e) => saveStyle({ fontWeight: e.target.value ? Number(e.target.value) : undefined })}
            className="h-6 rounded border border-border bg-background text-[10px] text-foreground px-1"
          >
            <option value="">Auto</option>
            {FONT_WEIGHT_OPTIONS.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-0.5 border-r border-border/50 pr-2">
          {(['left', 'center', 'right'] as const).map((align) => {
            const Icon = align === 'left' ? AlignLeft : align === 'center' ? AlignCenter : AlignRight;
            return (
              <button
                key={align}
                type="button"
                onClick={() => saveStyle({ textAlign: textStyle.textAlign === align ? undefined : align })}
                className={cn(
                  'w-6 h-6 rounded flex items-center justify-center',
                  textStyle.textAlign === align
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                )}
              >
                <Icon className="w-3 h-3" />
              </button>
            );
          })}
        </div>

        {/* Max Width */}
        <div className="flex items-center gap-1">
          <span className="text-[9px] text-muted-foreground">W</span>
          <input
            type="number"
            value={textStyle.maxWidth || ''}
            onChange={(e) => saveStyle({ maxWidth: e.target.value ? Number(e.target.value) : undefined })}
            placeholder="auto"
            className="w-14 h-6 rounded border border-border bg-background text-[10px] text-foreground px-1"
            min={0}
            step={10}
          />
        </div>

        {/* Text Color */}
        <div className="flex items-center gap-1 border-r border-border/50 pr-2">
          <span className="text-[9px] text-muted-foreground">A</span>
          <input
            type="color"
            value={textStyle.color || '#000000'}
            onChange={(e) => saveStyle({ color: e.target.value })}
            className="w-6 h-6 rounded border border-border cursor-pointer p-0"
            title="Cor do texto"
          />
          {textStyle.color && (
            <button
              type="button"
              onClick={() => saveStyle({ color: undefined })}
              className="w-4 h-4 rounded flex items-center justify-center hover:bg-muted text-muted-foreground"
              title="Resetar cor"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          )}
        </div>

        {/* Reset */}
        <button
          type="button"
          onClick={() => updateContent(activeStyleKey, undefined)}
          className="w-6 h-6 rounded flex items-center justify-center hover:bg-muted text-muted-foreground"
          title={`Resetar estilos (${isMobile ? 'mobile' : 'desktop'})`}
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>,
      document.body
    );

  return (
    <span ref={wrapperRef} className="relative inline group/text hover:z-[999]" style={{ isolation: 'auto' }}>
      <Component
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: any) => updateContent(id, e.currentTarget.textContent ?? '')}
        className={cn(
          className,
          'outline-none border-b border-dashed border-primary/40 bg-primary/10 rounded-sm px-1 cursor-text'
        )}
        style={inlineStyle}
      >
        {text}
      </Component>

      {/* Style toggle button - appears on hover */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          syncPanelPos();
          setShowStylePanel((v) => !v);
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className="absolute -top-3 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-md z-[9999] hover:scale-125 transition-all opacity-0 group-hover/text:opacity-100 flex pointer-events-auto"
        title="Estilo do texto"
      >
        <Type className="w-2.5 h-2.5" />
      </button>

      {portal}
    </span>
  );
};

/* ══════════════════════════════════════════════════════════════════
   EditableElement — visibility toggle + responsive block position
   ══════════════════════════════════════════════════════════════════ */

interface BlockPosition {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const resolveBlockPosition = (value: unknown): BlockPosition => {
  if (!value || typeof value !== 'object') return {};
  return value as BlockPosition;
};

interface EditableElementProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export const EditableElement: React.FC<EditableElementProps> = ({
  id,
  children,
  className,
  label,
}) => {
  const { isEditMode, content, updateContent } = useEditor();
  const isMobile = useIsMobile();
  const visKey = `${id}_visible`;
  const desktopPosKey = `${id}_position`;
  const mobilePosKey = `${id}_mobile_position`;
  const activePosKey = isMobile ? mobilePosKey : desktopPosKey;
  const isVisible = content[visKey] !== false;

  const desktopPos = resolveBlockPosition(content[desktopPosKey]);
  const mobilePos = resolveBlockPosition(content[mobilePosKey]);

  const blockPos = useMemo(() => {
    if (!isMobile) return desktopPos;
    return {
      marginTop: mobilePos.marginTop ?? desktopPos.marginTop,
      marginBottom: mobilePos.marginBottom ?? desktopPos.marginBottom,
      marginLeft: mobilePos.marginLeft ?? desktopPos.marginLeft,
      marginRight: mobilePos.marginRight ?? desktopPos.marginRight,
    };
  }, [isMobile, desktopPos, mobilePos]);

  const activePos = isMobile ? mobilePos : desktopPos;
  const [showPosPanel, setShowPosPanel] = useState(false);

  const savePos = useCallback(
    (patch: Partial<BlockPosition>) => {
      const merged = { ...activePos, ...patch };
      const clean: BlockPosition = {};
      if (merged.marginTop) clean.marginTop = merged.marginTop;
      if (merged.marginBottom) clean.marginBottom = merged.marginBottom;
      if (merged.marginLeft) clean.marginLeft = merged.marginLeft;
      if (merged.marginRight) clean.marginRight = merged.marginRight;
      updateContent(activePosKey, Object.keys(clean).length > 0 ? clean : undefined);
    },
    [activePos, activePosKey, updateContent]
  );

  const posStyle = useMemo<React.CSSProperties>(() => {
    const s: React.CSSProperties = {};
    if (blockPos.marginTop) s.marginTop = `${blockPos.marginTop}px`;
    if (blockPos.marginBottom) s.marginBottom = `${blockPos.marginBottom}px`;
    if (blockPos.marginLeft) s.marginLeft = `${blockPos.marginLeft}px`;
    if (blockPos.marginRight) s.marginRight = `${blockPos.marginRight}px`;
    return s;
  }, [blockPos]);

  useEffect(() => {
    if (!isEditMode) setShowPosPanel(false);
  }, [isEditMode]);

  if (!isEditMode && !isVisible) return null;

  return (
    <div className={cn('relative group/editable', className)} style={posStyle}>
      {isEditMode && (
        <div className={cn('absolute top-1 right-1 z-50 flex items-center gap-1 opacity-0 group-hover/editable:opacity-100 transition-opacity')}>
          {label && (
            <span className="text-[9px] font-medium text-foreground bg-background/90 border border-border rounded px-1.5 py-0.5 shadow-sm">{label}</span>
          )}
          <button type="button" onClick={(e) => { e.stopPropagation(); setShowPosPanel((v) => !v); }}
            className={cn('w-6 h-6 rounded-md flex items-center justify-center shadow-sm border transition-colors', showPosPanel ? 'bg-primary border-primary text-primary-foreground' : 'bg-background/90 border-border text-foreground hover:bg-muted')}
            title="Posição do bloco">
            <Move className="w-3 h-3" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); updateContent(visKey, isVisible ? false : undefined); }}
            className={cn('w-6 h-6 rounded-md flex items-center justify-center shadow-sm border transition-colors', isVisible ? 'bg-background/90 border-border text-foreground hover:bg-destructive/10 hover:text-destructive' : 'bg-destructive/90 border-destructive text-destructive-foreground')}
            title={isVisible ? 'Ocultar elemento' : 'Mostrar elemento'}>
            {isVisible ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          </button>
        </div>
      )}

      {isEditMode && showPosPanel && (
        <div className="absolute top-8 right-1 z-[2147483647] bg-background/95 backdrop-blur border border-border rounded-xl shadow-xl p-3 min-w-[200px] max-w-[calc(100vw-24px)]"
          onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">Posição</span>
              <div className="flex items-center gap-1 border-l border-border/50 pl-2">
                {isMobile ? <Smartphone className="w-3 h-3 text-primary" /> : <Monitor className="w-3 h-3 text-primary" />}
                <span className="text-[8px] font-bold text-primary uppercase">{isMobile ? 'Mobile' : 'Desktop'}</span>
              </div>
            </div>
            <button type="button" onClick={() => updateContent(activePosKey, undefined)}
              className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-muted-foreground"
              title={`Resetar posição (${isMobile ? 'mobile' : 'desktop'})`}>
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5">
              <ArrowUp className="w-3 h-3 text-muted-foreground shrink-0" />
              <div className="flex items-center gap-0.5 flex-1">
                <button type="button" onClick={() => savePos({ marginTop: (activePos.marginTop || 0) - 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Minus className="w-2.5 h-2.5" /></button>
                <span className="text-[10px] font-mono text-foreground w-8 text-center">{activePos.marginTop || 0}</span>
                <button type="button" onClick={() => savePos({ marginTop: (activePos.marginTop || 0) + 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Plus className="w-2.5 h-2.5" /></button>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <ArrowDown className="w-3 h-3 text-muted-foreground shrink-0" />
              <div className="flex items-center gap-0.5 flex-1">
                <button type="button" onClick={() => savePos({ marginBottom: (activePos.marginBottom || 0) - 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Minus className="w-2.5 h-2.5" /></button>
                <span className="text-[10px] font-mono text-foreground w-8 text-center">{activePos.marginBottom || 0}</span>
                <button type="button" onClick={() => savePos({ marginBottom: (activePos.marginBottom || 0) + 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Plus className="w-2.5 h-2.5" /></button>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <ArrowLeft className="w-3 h-3 text-muted-foreground shrink-0" />
              <div className="flex items-center gap-0.5 flex-1">
                <button type="button" onClick={() => savePos({ marginLeft: (activePos.marginLeft || 0) - 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Minus className="w-2.5 h-2.5" /></button>
                <span className="text-[10px] font-mono text-foreground w-8 text-center">{activePos.marginLeft || 0}</span>
                <button type="button" onClick={() => savePos({ marginLeft: (activePos.marginLeft || 0) + 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Plus className="w-2.5 h-2.5" /></button>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
              <div className="flex items-center gap-0.5 flex-1">
                <button type="button" onClick={() => savePos({ marginRight: (activePos.marginRight || 0) - 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Minus className="w-2.5 h-2.5" /></button>
                <span className="text-[10px] font-mono text-foreground w-8 text-center">{activePos.marginRight || 0}</span>
                <button type="button" onClick={() => savePos({ marginRight: (activePos.marginRight || 0) + 5 })} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted text-foreground"><Plus className="w-2.5 h-2.5" /></button>
              </div>
            </div>
          </div>
          <p className="text-[8px] text-muted-foreground mt-2 text-center">Valores em pixels (px)</p>
        </div>
      )}

      <div className={cn(!isVisible && isEditMode && 'opacity-20 border-2 border-dashed border-destructive/40 rounded-lg pointer-events-none')}>
        {children}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   EditableImage — unchanged logic
   ══════════════════════════════════════════════════════════════════ */

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

interface ImageMeta {
  x: number;
  y: number;
  zoom: number;
  borderRadius: number;
}

const DEFAULT_META: ImageMeta = {
  x: 50,
  y: 50,
  zoom: 100,
  borderRadius: 0,
};

const extractObjectPosition = (value?: string): string | undefined => {
  if (!value) return undefined;

  const arbitraryMatch = value.match(/object-\[([^\]]+)\]/);
  if (arbitraryMatch?.[1]) return arbitraryMatch[1].replace(/_/g, ' ');

  if (/\bobject-center\b/.test(value)) return '50% 50%';
  if (/\bobject-top\b/.test(value)) return '50% 0%';
  if (/\bobject-bottom\b/.test(value)) return '50% 100%';
  if (/\bobject-left\b/.test(value)) return '0% 50%';
  if (/\bobject-right\b/.test(value)) return '100% 50%';

  return undefined;
};

const resolveMeta = (value: unknown): ImageMeta => {
  if (!value || typeof value !== 'object') return DEFAULT_META;

  const meta = value as Partial<ImageMeta>;
  return {
    x: typeof meta.x === 'number' ? meta.x : DEFAULT_META.x,
    y: typeof meta.y === 'number' ? meta.y : DEFAULT_META.y,
    zoom: typeof meta.zoom === 'number' ? meta.zoom : DEFAULT_META.zoom,
    borderRadius: typeof meta.borderRadius === 'number' ? meta.borderRadius : DEFAULT_META.borderRadius,
  };
};

export const EditableImage: React.FC<EditableImageProps> = ({ id, defaultSrc, alt, className }) => {
  const { isEditMode, content, updateContent } = useEditor();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlDraft, setUrlDraft] = useState('');
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const metaKey = `${id}_meta`;
  const currentSrc = typeof content[id] === 'string' ? (content[id] as string) : defaultSrc;
  const meta = resolveMeta(content[metaKey]);
  const defaultObjectPosition = extractObjectPosition(className);

  const imageStyle = useMemo<React.CSSProperties>(() => {
    const style: React.CSSProperties = {};

    const hasMoved = meta.x !== DEFAULT_META.x || meta.y !== DEFAULT_META.y;
    if (hasMoved) {
      style.objectPosition = `${meta.x}% ${meta.y}%`;
    } else if (defaultObjectPosition) {
      style.objectPosition = defaultObjectPosition;
    }

    if (meta.zoom !== DEFAULT_META.zoom) {
      style.transform = `scale(${meta.zoom / 100})`;
      style.transformOrigin = `${meta.x}% ${meta.y}%`;
    }

    return style;
  }, [meta.x, meta.y, meta.zoom, defaultObjectPosition]);

  const saveMeta = useCallback(
    (next: Partial<ImageMeta>) => {
      const merged = {
        x: typeof next.x === 'number' ? next.x : meta.x,
        y: typeof next.y === 'number' ? next.y : meta.y,
        zoom: typeof next.zoom === 'number' ? next.zoom : meta.zoom,
        borderRadius: typeof next.borderRadius === 'number' ? next.borderRadius : meta.borderRadius,
      };

      const isDefault =
        merged.x === DEFAULT_META.x && merged.y === DEFAULT_META.y && merged.zoom === DEFAULT_META.zoom && merged.borderRadius === DEFAULT_META.borderRadius;

      updateContent(metaKey, isDefault ? undefined : merged);
    },
    [meta.x, meta.y, meta.zoom, meta.borderRadius, metaKey, updateContent]
  );

  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        alert('Selecione um arquivo de imagem.');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert('A imagem deve ter no máximo 10MB.');
        return;
      }

      setIsUploading(true);
      try {
        const reader = new FileReader();
        reader.onload = () => {
          updateContent(id, reader.result as string);
          setIsUploading(false);
        };
        reader.onerror = () => {
          alert('Erro ao ler a imagem.');
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      } catch (err) {
        console.error('Upload error:', err);
        alert('Erro ao fazer upload.');
        setIsUploading(false);
      } finally {
        event.target.value = '';
      }
    },
    [id, updateContent]
  );

  const handleReset = useCallback(() => {
    updateContent(id, defaultSrc);
    updateContent(metaKey, undefined);
  }, [defaultSrc, id, metaKey, updateContent]);

  const applyUrl = useCallback(() => {
    const clean = urlDraft.trim();
    if (!clean) return;

    updateContent(id, clean);
    setShowUrlInput(false);
  }, [id, updateContent, urlDraft]);

  const syncAnchorRect = useCallback(() => {
    const rect = wrapperRef.current?.getBoundingClientRect();

    if (!rect || rect.width <= 0 || rect.height <= 0) {
      setAnchorRect(null);
      return;
    }

    setAnchorRect(rect);
  }, []);

  useEffect(() => {
    if (!isEditMode) {
      setIsPanelOpen(false);
      setShowUrlInput(false);
      setAnchorRect(null);
      return;
    }

    syncAnchorRect();

    window.addEventListener('resize', syncAnchorRect);
    window.addEventListener('scroll', syncAnchorRect, true);

    return () => {
      window.removeEventListener('resize', syncAnchorRect);
      window.removeEventListener('scroll', syncAnchorRect, true);
    };
  }, [isEditMode, syncAnchorRect]);

  useEffect(() => {
    if (isEditMode) syncAnchorRect();
  }, [isEditMode, isPanelOpen, currentSrc, syncAnchorRect]);

  useEffect(() => {
    if (showUrlInput) setUrlDraft(currentSrc);
  }, [currentSrc, showUrlInput]);

  useEffect(() => {
    if (!isEditMode) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const isInsideImage = wrapperRef.current?.contains(target);
      const isInsideOverlay = (target as HTMLElement).closest?.(`[data-editor-image-overlay="${id}"]`);

      if (!isInsideImage && !isInsideOverlay) {
        setIsPanelOpen(false);
        setShowUrlInput(false);
      }
    };

    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [id, isEditMode]);

  const controlsOverlay =
    isEditMode &&
    anchorRect &&
    typeof document !== 'undefined' &&
    createPortal(
      <div
        data-editor-image-overlay={id}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: EDITOR_Z_INDEX,
        }}
      >
        {!isPanelOpen ? (
          <button
            type="button"
            style={{
              position: 'fixed',
              left: anchorRect.left + anchorRect.width / 2,
              top: anchorRect.top + anchorRect.height / 2,
              transform: 'translate(-50%, -50%)',
              zIndex: EDITOR_Z_INDEX,
              pointerEvents: 'auto',
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPanelOpen(true);
              syncAnchorRect();
            }}
            className="px-3 py-1.5 rounded-md bg-background/95 border border-border text-xs font-medium text-foreground shadow-lg"
          >
            Editar imagem
          </button>
        ) : (
          (() => {
            const rawPanelWidth = Math.min(520, Math.max(260, anchorRect.width - 16));
            const panelWidth = Math.min(rawPanelWidth, window.innerWidth - 16);
            const panelLeft = clamp(anchorRect.left + 8, 8, window.innerWidth - panelWidth - 8);
            const panelTop = clamp(anchorRect.top + 8, 8, window.innerHeight - 220);

            return (
              <div
                style={{
                  position: 'fixed',
                  left: panelLeft,
                  top: panelTop,
                  width: panelWidth,
                  maxWidth: 'calc(100vw - 16px)',
                  pointerEvents: 'auto',
                  zIndex: EDITOR_Z_INDEX,
                }}
                className="rounded-xl border border-border bg-background/95 shadow-lg backdrop-blur p-2 space-y-2"
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <label className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[11px] font-medium cursor-pointer">
                      <Upload className="w-3 h-3" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>

                    <button
                      type="button"
                      onClick={() => setShowUrlInput((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-[11px] font-medium"
                    >
                      <Link className="w-3 h-3" />
                      URL
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted text-muted-foreground text-[11px] font-medium"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsPanelOpen(false);
                      setShowUrlInput(false);
                    }}
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-muted text-foreground"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {showUrlInput && (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={urlDraft}
                      onChange={(e) => setUrlDraft(e.target.value)}
                      placeholder="https://... ou /assets/..."
                      className="flex-1 h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground"
                      onKeyDown={(e) => e.key === 'Enter' && applyUrl()}
                    />
                    <button
                      type="button"
                      onClick={applyUrl}
                      className="h-8 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium"
                    >
                      Aplicar
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <label className="space-y-1">
                    <span className="text-[10px] font-medium text-foreground/80">Posição X ({Math.round(meta.x)}%)</span>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={meta.x}
                      onChange={(e) => saveMeta({ x: Number(e.target.value) })}
                      className="w-full"
                    />
                  </label>

                  <label className="space-y-1">
                    <span className="text-[10px] font-medium text-foreground/80">Posição Y ({Math.round(meta.y)}%)</span>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={meta.y}
                      onChange={(e) => saveMeta({ y: Number(e.target.value) })}
                      className="w-full"
                    />
                  </label>

                  <label className="space-y-1">
                    <span className="text-[10px] font-medium text-foreground/80">Zoom ({Math.round(meta.zoom)}%)</span>
                    <input
                      type="range"
                      min={100}
                      max={200}
                      step={1}
                      value={meta.zoom}
                      onChange={(e) => saveMeta({ zoom: Number(e.target.value) })}
                      className="w-full"
                    />
                  </label>

                  <label className="space-y-1">
                    <span className="text-[10px] font-medium text-foreground/80">Bordas ({meta.borderRadius}px)</span>
                    <input
                      type="range"
                      min={0}
                      max={50}
                      step={1}
                      value={meta.borderRadius}
                      onChange={(e) => saveMeta({ borderRadius: Number(e.target.value) })}
                      className="w-full"
                    />
                  </label>
                </div>
              </div>
            );
          })()
        )}
      </div>,
      document.body
    );

  // Render file input in a portal so it's never blocked by overflow:hidden
  const fileInputPortal =
    isEditMode &&
    typeof document !== 'undefined' &&
    createPortal(
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />,
      document.body
    );

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={meta.borderRadius > 0 ? { borderRadius: `${meta.borderRadius}px`, overflow: 'hidden' } : undefined}
      onMouseDown={(e) => {
        if (!isEditMode) return;
        e.stopPropagation();
      }}
      onClick={(e) => {
        if (!isEditMode) return;
        e.stopPropagation();
        setIsPanelOpen(true);
        syncAnchorRect();
      }}
    >
      <img
        src={currentSrc}
        alt={alt}
        className="w-full h-full object-cover select-none"
        style={imageStyle}
        draggable={false}
      />

      {controlsOverlay}
    </div>
  );
};
