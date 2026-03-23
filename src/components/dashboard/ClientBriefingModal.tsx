import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { X, Upload, Trash2, Plus, FileText, Image, Type, Target, User, Palette, LayoutGrid } from 'lucide-react';

interface BriefingData {
  clientName: string;
  professionalName: string;
  fonts: string;
  visualIdentity: string;
  copy: string;
  finalObjective: string;
  referenceSections: string;
  referenceImages: string[];
  identityImages: string[];
  referenceSectionImages: string[];
}

const EMPTY_BRIEFING: BriefingData = {
  clientName: '',
  professionalName: '',
  fonts: '',
  visualIdentity: '',
  copy: '',
  finalObjective: '',
  referenceSections: '',
  referenceImages: [],
  identityImages: [],
  referenceSectionImages: [],
};

interface Props {
  project: { id: string; name: string; settings: any };
  onClose: () => void;
  onSaved: () => void;
}

const ClientBriefingModal = ({ project, onClose, onSaved }: Props) => {
  const [briefing, setBriefing] = useState<BriefingData>(EMPTY_BRIEFING);
  const [saving, setSaving] = useState(false);
  const [uploadingRef, setUploadingRef] = useState(false);
  const [uploadingIdentity, setUploadingIdentity] = useState(false);
  const [uploadingSectionRef, setUploadingSectionRef] = useState(false);
  const refInputRef = useRef<HTMLInputElement>(null);
  const identityInputRef = useRef<HTMLInputElement>(null);
  const sectionRefInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const settings = project.settings as any;
    const saved = settings?.briefing || {};
    setBriefing({ ...EMPTY_BRIEFING, clientName: project.name, ...saved });
  }, [project]);

  const updateField = (field: keyof BriefingData, value: any) => {
    setBriefing(prev => ({ ...prev, [field]: value }));
  };

  const uploadImages = async (files: FileList, field: 'referenceImages' | 'identityImages' | 'referenceSectionImages') => {
    const setUploading = field === 'referenceImages' ? setUploadingRef : field === 'identityImages' ? setUploadingIdentity : setUploadingSectionRef;
    setUploading(true);

    const urls: string[] = [];
    for (const file of Array.from(files)) {
      const ext = file.name?.split('.').pop() || 'png';
      const path = `briefing/${project.id}/${field}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error } = await supabase.storage.from('editor-images').upload(path, file);
      if (!error) {
        const { data: urlData } = supabase.storage.from('editor-images').getPublicUrl(path);
        urls.push(urlData.publicUrl);
      }
    }

    setBriefing(prev => ({
      ...prev,
      [field]: [...prev[field], ...urls],
    }));
    setUploading(false);

    // Reset input so the same files can be re-selected
    if (field === 'referenceImages' && refInputRef.current) refInputRef.current.value = '';
    if (field === 'identityImages' && identityInputRef.current) identityInputRef.current.value = '';
    if (field === 'referenceSectionImages' && sectionRefInputRef.current) sectionRefInputRef.current.value = '';
  };

  const handlePaste = async (e: React.ClipboardEvent, field: 'referenceImages' | 'identityImages' | 'referenceSectionImages') => {
    const items = e.clipboardData?.items;
    if (!items) return;
    const files: File[] = [];
    for (const item of Array.from(items)) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) files.push(file);
      }
    }
    if (files.length === 0) return;
    e.preventDefault();
    const dt = new DataTransfer();
    files.forEach(f => dt.items.add(f));
    await uploadImages(dt.files, field);
  };

  const removeImage = (field: 'referenceImages' | 'identityImages' | 'referenceSectionImages', index: number) => {
    setBriefing(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    const currentSettings = (project.settings && typeof project.settings === 'object') ? project.settings : {};
    const updateData: any = {
      settings: { ...currentSettings, briefing } as any,
    };
    if (briefing.clientName.trim()) {
      updateData.name = briefing.clientName.trim();
    }
    const { error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', project.id);

    if (error) {
      alert('Erro ao salvar: ' + error.message);
    } else {
      onSaved();
      onClose();
    }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-50 px-4 py-8 overflow-y-auto">
      <div className="bg-neutral-950 border border-white/[0.08] rounded-2xl w-full max-w-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
          <div>
            <h3 className="text-base font-bold text-white">Briefing do Cliente</h3>
            <p className="text-white/30 text-xs mt-0.5">{project.name}</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white/60 transition p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Client Name */}
          <Field icon={<User className="w-3.5 h-3.5" />} label="Nome do Cliente">
            <input
              value={briefing.clientName}
              onChange={e => updateField('clientName', e.target.value)}
              className="input-field"
              placeholder="Nome do cliente / projeto"
            />
          </Field>

          {/* Professional Name */}
          <Field icon={<User className="w-3.5 h-3.5" />} label="Nome do Profissional">
            <input
              value={briefing.professionalName}
              onChange={e => updateField('professionalName', e.target.value)}
              className="input-field"
              placeholder="Dr. João da Silva"
            />
          </Field>

          {/* Fonts */}
          <Field icon={<Type className="w-3.5 h-3.5" />} label="Fontes">
            <input
              value={briefing.fonts}
              onChange={e => updateField('fonts', e.target.value)}
              className="input-field"
              placeholder="Ex: Montserrat, Playfair Display"
            />
          </Field>

          {/* Visual Identity Description */}
          <Field icon={<Palette className="w-3.5 h-3.5" />} label="Identidade Visual (Descrição)">
            <textarea
              value={briefing.visualIdentity}
              onChange={e => updateField('visualIdentity', e.target.value)}
              className="input-field min-h-[80px] resize-y"
              placeholder="Cores, estilo, tom da marca..."
            />
          </Field>

          {/* Identity Images Upload */}
          <div onPaste={e => handlePaste(e, 'identityImages')} tabIndex={0} className="outline-none">
            <Field icon={<Palette className="w-3.5 h-3.5" />} label="Identidade Visual (Arquivos) — Cole imagens com Ctrl+V">
              <ImageGrid
                images={briefing.identityImages}
                onRemove={(i) => removeImage('identityImages', i)}
              />
              <input
                ref={identityInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={e => e.target.files && uploadImages(e.target.files, 'identityImages')}
              />
              <button
                onClick={() => identityInputRef.current?.click()}
                disabled={uploadingIdentity}
                className="upload-btn"
              >
                {uploadingIdentity ? (
                  <div className="w-3.5 h-3.5 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                {uploadingIdentity ? 'Enviando...' : 'Anexar logotipo, paleta, etc.'}
              </button>
            </Field>
          </div>

          {/* Reference Images */}
          <div onPaste={e => handlePaste(e, 'referenceImages')} tabIndex={0} className="outline-none">
            <Field icon={<Image className="w-3.5 h-3.5" />} label="Imagens de Referência (Design) — Cole imagens com Ctrl+V">
              <ImageGrid
                images={briefing.referenceImages}
                onRemove={(i) => removeImage('referenceImages', i)}
              />
              <input
                ref={refInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={e => e.target.files && uploadImages(e.target.files, 'referenceImages')}
              />
              <button
                onClick={() => refInputRef.current?.click()}
                disabled={uploadingRef}
                className="upload-btn"
              >
                {uploadingRef ? (
                  <div className="w-3.5 h-3.5 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                {uploadingRef ? 'Enviando...' : 'Anexar imagens de referência'}
              </button>
            </Field>
          </div>

          {/* Reference Sections */}
          <div onPaste={e => handlePaste(e, 'referenceSectionImages')} tabIndex={0} className="outline-none">
            <Field icon={<LayoutGrid className="w-3.5 h-3.5" />} label="Sessões de Referência (Design) — Cole imagens com Ctrl+V">
              <ImageGrid
                images={briefing.referenceSectionImages || []}
                onRemove={(i) => removeImage('referenceSectionImages', i)}
              />
              <input
                ref={sectionRefInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={e => e.target.files && uploadImages(e.target.files, 'referenceSectionImages')}
              />
              <button
                onClick={() => sectionRefInputRef.current?.click()}
                disabled={uploadingSectionRef}
                className="upload-btn"
              >
                {uploadingSectionRef ? (
                  <div className="w-3.5 h-3.5 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                {uploadingSectionRef ? 'Enviando...' : 'Anexar imagens de sessões'}
              </button>
              <textarea
                value={briefing.referenceSections}
                onChange={e => updateField('referenceSections', e.target.value)}
                onPaste={e => handlePaste(e, 'referenceSectionImages')}
                className="input-field min-h-[80px] resize-y mt-2"
                placeholder="Descreva seções ou links de referência para o design... (Ctrl+V para colar imagens)"
              />
            </Field>
          </div>

          {/* Copy */}
          <Field icon={<FileText className="w-3.5 h-3.5" />} label="Copy (Textos)">
            <textarea
              value={briefing.copy}
              onChange={e => updateField('copy', e.target.value)}
              className="input-field min-h-[100px] resize-y"
              placeholder="Textos principais, headlines, CTAs..."
            />
          </Field>

          {/* Final Objective */}
          <Field icon={<Target className="w-3.5 h-3.5" />} label="Objetivo Final">
            <textarea
              value={briefing.finalObjective}
              onChange={e => updateField('finalObjective', e.target.value)}
              className="input-field min-h-[80px] resize-y"
              placeholder="O que o cliente espera alcançar com o site..."
            />
          </Field>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-white/[0.06]">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-white/[0.08] text-white/40 hover:text-white/60 hover:bg-white/[0.04] transition text-sm"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 disabled:opacity-30 transition text-sm"
          >
            {saving ? 'Salvando...' : 'Salvar Briefing'}
          </button>
        </div>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.8125rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus {
          border-color: rgba(255,255,255,0.15);
        }
        .input-field::placeholder {
          color: rgba(255,255,255,0.15);
        }
        .upload-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.75rem;
          border: 1px dashed rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.35);
          font-size: 0.6875rem;
          transition: all 0.2s;
          background: transparent;
          cursor: pointer;
        }
        .upload-btn:hover {
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.02);
        }
      `}</style>
    </div>
  );
};

const Field = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div>
    <label className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
      {icon}
      {label}
    </label>
    {children}
  </div>
);

const ImageGrid = ({ images, onRemove }: { images: string[]; onRemove: (i: number) => void }) => {
  if (images.length === 0) return null;
  return (
    <div className="grid grid-cols-4 gap-2 mb-2">
      {images.map((url, i) => (
        <div key={i} className="relative group aspect-square rounded-lg overflow-hidden border border-white/[0.06]">
          <img src={url} alt="" className="w-full h-full object-cover" />
          <button
            onClick={() => onRemove(i)}
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClientBriefingModal;
