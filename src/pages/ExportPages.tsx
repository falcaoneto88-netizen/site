import React, { useState, useCallback } from 'react';
import { Copy, Check, ExternalLink, FileText, ChevronDown, ChevronUp, Download, Image } from 'lucide-react';

const BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';
const PUBLISHED_URL = 'https://gentle-page-center.lovable.app';

/* ─── Utility ─── */
const CopyButton = ({ text, label }: { text: string; label?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 14px', background: copied ? '#065f46' : '#1f2937',
        color: copied ? '#a7f3d0' : '#d1d5db', border: 'none', borderRadius: 6,
        fontSize: 12, fontFamily: 'monospace', cursor: 'pointer',
        transition: 'background 0.2s',
      }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {label || (copied ? 'Copiado!' : 'Copiar HTML')}
    </button>
  );
};

/* ─── Sections data ─── */
const WHATSAPP_URL = 'https://wa.me/557599630999?text=Olá, vim pelo site e gostaria de um atendimento.';
const INSTAGRAM_URL = 'https://instagram.com/oralunicfsa';

interface SectionDef {
  id: string;
  name: string;
  html: string;
}

const img = (path: string) => `${PUBLISHED_URL}${path}`;

const HOME_SECTIONS: SectionDef[] = [
  {
    id: 'hero',
    name: '1. Hero',
    html: `<div style="background:#ffffff;overflow:hidden;">
  <div style="position:relative;width:100%;max-width:1400px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;">
    <!-- Texto -->
    <div style="flex:1 1 50%;padding:60px 40px;min-width:300px;">
      <span style="display:inline-block;padding:6px 16px;margin-bottom:16px;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#00BFA6;background:rgba(0,191,166,0.1);border-radius:99px;">Viva a Experiência Premium</span>
      <h1 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,3vw,38px);font-weight:500;line-height:1.1;margin:0 0 16px;color:#000000;">
        Cuidado odontológico completo e <em style="color:#540247;">especializado em cada detalhe.</em>
      </h1>
      <p style="font-size:14px;line-height:1.7;color:#555555;margin-bottom:24px;font-weight:300;">
        Na Oral Unic, você encontra tecnologia, planejamento personalizado e uma equipe de especialistas para cuidar da sua saúde bucal, estética e bem-estar em um só lugar.
      </p>
      <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:linear-gradient(-45deg,#4A0E4E,#5C1660);color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">
        Começar Transformação →
      </a>
    </div>
    <!-- Imagem -->
    <div style="flex:1 1 45%;min-width:280px;position:relative;">
      <img src="${img('/assets/real-photos/dra_hero_hq_v5.png')}" alt="Dra. especialista Oral Unic" style="width:100%;height:auto;display:block;object-fit:cover;" />
    </div>
  </div>
</div>`,
  },
  {
    id: 'services',
    name: '2. Especialidades',
    html: `<div style="background:#ffffff;padding:56px 16px;">
  <div style="max-width:1200px;margin:0 auto;text-align:center;">
    <p style="font-size:10px;font-weight:700;letter-spacing:0.4em;text-transform:uppercase;color:#888;margin-bottom:12px;">Nossas Especialidades</p>
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 8px;color:#000;">Especialidades <em style="color:#540247;">Exclusivas</em></h2>
    <p style="font-size:14px;color:#555;max-width:600px;margin:0 auto 40px;line-height:1.7;">Combinamos técnicas minimamente invasivas com materiais de alto padrão para entregar resultados previsíveis e extraordinários.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;">
${[
  { title: 'Implantes Dentários', desc: 'Tratamentos personalizados para a reposição de dentes.', img: '/assets/services/implantes.jpg' },
  { title: 'Ortodontia', desc: 'Correção de dentes desalinhados com aparelhos e alinhadores.', img: '/assets/services/ortodontia.jpg' },
  { title: 'Endodontia', desc: 'Tratamento de canal com técnica e precisão.', img: '/assets/services/endodontia.jpg' },
  { title: 'Próteses Dentárias', desc: 'Soluções para devolução da função dentária e estética.', img: '/assets/services/proteses.jpg' },
  { title: 'Clínica Geral', desc: 'Cuidado odontológico completo e preventivo.', img: '/assets/services/clinica_geral.jpg' },
  { title: 'Periodontia', desc: 'Tratamentos focados na saúde da gengiva.', img: '/assets/services/periodontia.jpg' },
  { title: 'Facetas em Resina', desc: 'Melhoria estética rápida e natural.', img: '/assets/services/facetas.jpg' },
  { title: 'Harmonização Orofacial', desc: 'Procedimentos para equilíbrio facial.', img: '/assets/services/harmonizacao.jpg' },
].map(s => `      <div style="border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,0.06);text-align:left;">
        <img src="${img(s.img)}" alt="${s.title}" style="width:100%;height:180px;object-fit:cover;" />
        <div style="padding:16px 20px;">
          <h3 style="font-size:16px;font-weight:600;margin:0 0 6px;color:#000;">${s.title}</h3>
          <p style="font-size:13px;color:#555;margin:0;line-height:1.5;">${s.desc}</p>
        </div>
      </div>`).join('\n')}
    </div>
  </div>
</div>`,
  },
  {
    id: 'why-choose',
    name: '3. Por que nos escolher',
    html: `<div style="background:#FDFCF8;padding:56px 16px;">
  <div style="max-width:1200px;margin:0 auto;text-align:center;">
    <p style="font-size:10px;font-weight:700;letter-spacing:0.4em;text-transform:uppercase;color:#888;margin-bottom:12px;">Diferenciais</p>
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 40px;color:#000;">Por que escolher a <em style="color:#540247;">Oral Unic?</em></h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:24px;">
${[
  { icon: '🏥', title: 'Estrutura Premium', desc: 'Consultórios modernos e equipados com tecnologia de ponta.' },
  { icon: '👨‍⚕️', title: 'Equipe Especializada', desc: 'Profissionais com formação avançada em suas especialidades.' },
  { icon: '🎯', title: 'Planejamento Digital', desc: 'Tratamentos planejados digitalmente para resultados previsíveis.' },
  { icon: '💎', title: 'Atendimento Humanizado', desc: 'Cuidado individualizado focado no seu bem-estar.' },
].map(d => `      <div style="padding:32px 24px;background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04);text-align:center;">
        <div style="font-size:32px;margin-bottom:12px;">${d.icon}</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;color:#000;">${d.title}</h3>
        <p style="font-size:13px;color:#555;margin:0;line-height:1.5;">${d.desc}</p>
      </div>`).join('\n')}
    </div>
  </div>
</div>`,
  },
  {
    id: 'results',
    name: '4. Resultados / Antes e Depois',
    html: `<div style="background:#FDFCF8;padding:56px 16px;">
  <div style="max-width:1200px;margin:0 auto;text-align:center;">
    <p style="font-size:10px;font-weight:700;letter-spacing:0.4em;text-transform:uppercase;color:#888;margin-bottom:12px;">Resultados Reais</p>
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 40px;color:#000;">Transformações que <em style="color:#540247;">Inspiram</em></h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
${[
  '/assets/real-photos/transformation_smile_1.jpg',
  '/assets/real-photos/transformation_smile_2.jpg',
  '/assets/real-photos/transformation_smile_3.jpg',
  '/assets/real-photos/transformation_smile_4.png',
  '/assets/real-photos/transformation_harmony_1.png',
  '/assets/real-photos/transformation_profile_1.jpg',
].map(p => `      <img src="${img(p)}" alt="Resultado" style="width:100%;height:220px;object-fit:cover;border-radius:12px;" />`).join('\n')}
    </div>
  </div>
</div>`,
  },
  {
    id: 'doctor',
    name: '5. Especialista em Destaque',
    html: `<div style="background:#540247;padding:56px 16px;color:#fff;">
  <div style="max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:40px;">
    <div style="flex:1 1 40%;min-width:260px;">
      <img src="${img('/assets/real-photos/dr_section_hq_v2.png')}" alt="Dr. Especialista" style="width:100%;max-width:400px;border-radius:20px;" />
    </div>
    <div style="flex:1 1 50%;min-width:280px;">
      <p style="font-size:10px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:#D2A170;margin-bottom:12px;">Corpo Clínico</p>
      <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 16px;">Profissionais com <em>excelência</em> e dedicação</h2>
      <p style="font-size:14px;line-height:1.7;opacity:0.85;margin-bottom:24px;">
        Nossa equipe é formada por especialistas com formação avançada, atualizados com as mais recentes técnicas e tecnologias da odontologia moderna.
      </p>
      <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:#00BFA6;color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">
        Agendar Avaliação →
      </a>
    </div>
  </div>
</div>`,
  },
  {
    id: 'how-it-works',
    name: '6. Como Funciona',
    html: `<div style="background:#FDFCF8;padding:56px 16px;">
  <div style="max-width:900px;margin:0 auto;text-align:center;">
    <p style="font-size:10px;font-weight:700;letter-spacing:0.4em;text-transform:uppercase;color:#888;margin-bottom:12px;">Passo a Passo</p>
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 40px;color:#000;">Como funciona seu <em style="color:#540247;">atendimento</em></h2>
    <div style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;">
${[
  { step: '01', title: 'Agendamento', desc: 'Entre em contato pelo WhatsApp ou telefone.' },
  { step: '02', title: 'Avaliação', desc: 'Consulta detalhada com nosso especialista.' },
  { step: '03', title: 'Planejamento', desc: 'Plano de tratamento personalizado.' },
  { step: '04', title: 'Tratamento', desc: 'Execução com tecnologia e conforto.' },
].map(s => `      <div style="flex:1 1 200px;max-width:220px;padding:24px;background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04);text-align:center;">
        <div style="width:48px;height:48px;border-radius:50%;background:#540247;color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-weight:700;font-size:16px;">${s.step}</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 6px;color:#000;">${s.title}</h3>
        <p style="font-size:13px;color:#555;margin:0;line-height:1.5;">${s.desc}</p>
      </div>`).join('\n')}
    </div>
  </div>
</div>`,
  },
  {
    id: 'units',
    name: '7. Nossa Unidade',
    html: `<div style="background:#FDFCF8;padding:56px 16px;">
  <div style="max-width:1200px;margin:0 auto;text-align:center;">
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 32px;color:#000;">Conheça nossa <em style="color:#540247;">estrutura</em></h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
      <img src="${img('/assets/real-photos/unit_1.png')}" alt="Unidade 1" style="width:100%;height:250px;object-fit:cover;border-radius:12px;" />
      <img src="${img('/assets/real-photos/unit_2.png')}" alt="Unidade 2" style="width:100%;height:250px;object-fit:cover;border-radius:12px;" />
      <img src="${img('/assets/real-photos/unit_3.png')}" alt="Unidade 3" style="width:100%;height:250px;object-fit:cover;border-radius:12px;" />
    </div>
  </div>
</div>`,
  },
  {
    id: 'faq',
    name: '8. FAQ',
    html: `<div style="background:#FDFCF8;padding:56px 16px;">
  <div style="max-width:800px;margin:0 auto;">
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);text-align:center;margin:0 0 32px;color:#000;">Perguntas <em style="color:#540247;">Frequentes</em></h2>
${[
  { q: 'Como faço para agendar uma consulta?', a: 'Você pode agendar pelo WhatsApp, telefone ou diretamente pelo site.' },
  { q: 'Vocês aceitam convênios?', a: 'Sim, trabalhamos com diversos convênios. Entre em contato para verificar o seu.' },
  { q: 'Qual o horário de funcionamento?', a: 'Segunda a sexta das 8h às 18h. Sábados das 8h às 12h.' },
  { q: 'A primeira consulta tem custo?', a: 'Entre em contato para saber sobre avaliações e condições especiais.' },
].map(f => `    <details style="margin-bottom:12px;background:#fff;border-radius:12px;padding:16px 20px;box-shadow:0 1px 4px rgba(0,0,0,0.04);">
      <summary style="font-size:15px;font-weight:600;color:#000;cursor:pointer;list-style:none;">${f.q}</summary>
      <p style="font-size:14px;color:#555;margin:12px 0 0;line-height:1.6;">${f.a}</p>
    </details>`).join('\n')}
  </div>
</div>`,
  },
  {
    id: 'contact-cta',
    name: '9. CTA / Contato',
    html: `<div style="background:#540247;padding:64px 16px;text-align:center;color:#fff;">
  <div style="max-width:700px;margin:0 auto;">
    <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:clamp(24px,2.5vw,30px);margin:0 0 16px;">Pronto para transformar seu <em>sorriso?</em></h2>
    <p style="font-size:14px;line-height:1.7;opacity:0.85;margin-bottom:32px;">
      Agende sua avaliação agora e dê o primeiro passo para o sorriso que você sempre quis.
    </p>
    <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:14px 36px;background:#16a34a;color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">
      📱 Chamar no WhatsApp
    </a>
  </div>
</div>`,
  },
  {
    id: 'map',
    name: '10. Mapa',
    html: `<div style="background:#f5f5f5;padding:0;">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.123!2d-38.966!3d-12.266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE1JzU3LjYiUyAzOMKwNTcnNTcuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
    width="100%" height="400" style="border:0;display:block;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>`,
  },
];

/* ─── Media files ─── */
const MEDIA_FILES: Record<string, string[]> = {
  'Hero': ['/assets/real-photos/dra_hero_hq_v5.png', '/logo_official.png'],
  'Especialidades': ['/assets/services/implantes.jpg', '/assets/services/ortodontia.jpg', '/assets/services/endodontia.jpg', '/assets/services/proteses.jpg', '/assets/services/clinica_geral.jpg', '/assets/services/periodontia.jpg', '/assets/services/facetas.jpg', '/assets/services/harmonizacao.jpg'],
  'Doutor': ['/assets/real-photos/dr_section_hq_v2.png'],
  'Resultados': ['/assets/real-photos/transformation_smile_1.jpg', '/assets/real-photos/transformation_smile_2.jpg', '/assets/real-photos/transformation_smile_3.jpg', '/assets/real-photos/transformation_smile_4.png', '/assets/real-photos/transformation_harmony_1.png', '/assets/real-photos/transformation_profile_1.jpg'],
  'Unidade': ['/assets/real-photos/unit_1.png', '/assets/real-photos/unit_2.png', '/assets/real-photos/unit_3.png'],
};

/* ─── Section Card ─── */
const SectionCard = ({ section }: { section: SectionDef }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: 16, border: '1px solid #374151', borderRadius: 12, overflow: 'hidden', background: '#111827' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px', background: '#1f2937', border: 'none', cursor: 'pointer', color: '#f3f4f6',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15 }}>{section.name}</span>
        {open ? <ChevronUp size={18} color="#9ca3af" /> : <ChevronDown size={18} color="#9ca3af" />}
      </button>

      {open && (
        <div style={{ padding: 20 }}>
          {/* Preview */}
          <div style={{ marginBottom: 16, background: '#fff', borderRadius: 8, overflow: 'hidden', maxHeight: 300, overflowY: 'auto' }}>
            <div dangerouslySetInnerHTML={{ __html: section.html }} />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <CopyButton text={section.html} />
            <CopyButton
              text={`<!-- ${section.name} - Oral Unic Feira de Santana -->\n${section.html}`}
              label="Copiar com comentário"
            />
          </div>

          {/* Code view */}
          <details style={{ marginTop: 12 }}>
            <summary style={{ fontSize: 12, color: '#9ca3af', cursor: 'pointer' }}>Ver código</summary>
            <pre style={{
              marginTop: 8, padding: 16, background: '#0d1117', borderRadius: 8,
              fontSize: 11, color: '#7ee787', overflow: 'auto', maxHeight: 300,
              whiteSpace: 'pre-wrap', wordBreak: 'break-all',
            }}>
              {section.html}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

/* ─── Media Section ─── */
const MediaSection = ({ category, files }: { category: string; files: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 12, border: '1px solid #374151', borderRadius: 8, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 16px', background: '#1f2937', border: 'none', cursor: 'pointer', color: '#f3f4f6',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Image size={16} color="#2dd4bf" />
          <span style={{ fontWeight: 600, fontSize: 14 }}>{category}</span>
          <span style={{ color: '#9ca3af', fontSize: 12 }}>({files.length})</span>
        </span>
        {open ? <ChevronUp size={16} color="#9ca3af" /> : <ChevronDown size={16} color="#9ca3af" />}
      </button>
      {open && (
        <div style={{ padding: 16, background: '#111827' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: 12 }}>
            {files.map(f => (
              <div key={f} style={{ textAlign: 'center' }}>
                <img src={f} alt="" style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 6, border: '1px solid #374151' }} loading="lazy" />
                <a href={f} download style={{ fontSize: 10, color: '#2dd4bf', display: 'block', marginTop: 4, textDecoration: 'none' }}>
                  {f.split('/').pop()}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Copy All ─── */
const CopyAllButton = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const all = HOME_SECTIONS.map(s => `<!-- ${s.name} -->\n${s.html}`).join('\n\n');
    navigator.clipboard.writeText(all);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '10px 24px', background: copied ? '#065f46' : '#0d9488',
        color: '#fff', border: 'none', borderRadius: 8,
        fontSize: 14, fontWeight: 700, cursor: 'pointer',
      }}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? 'Todas as seções copiadas!' : 'Copiar TODAS as seções'}
    </button>
  );
};

/* ─── Main Page ─── */
const ExportPages = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#030712', color: '#f3f4f6', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#111827', borderBottom: '1px solid #1f2937', padding: '16px 20px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <FileText size={22} color="#2dd4bf" />
            <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Exportar Home → Elementor</h1>
          </div>
          <a href="/" style={{ fontSize: 13, color: '#2dd4bf', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            <ExternalLink size={14} /> Voltar ao site
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 16px' }}>
        {/* Instructions */}
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: 12, padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2dd4bf', margin: '0 0 12px' }}>📋 Como usar</h2>
          <ol style={{ fontSize: 14, color: '#d1d5db', lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
            <li>Abra cada seção abaixo e clique <strong>"Copiar HTML"</strong></li>
            <li>No Elementor, adicione um widget <strong>"HTML"</strong> na posição desejada</li>
            <li>Cole o código copiado dentro do widget</li>
            <li>Baixe as imagens na seção <strong>"Mídia"</strong> e suba para a Biblioteca de Mídia do WordPress</li>
            <li>Atualize as URLs das imagens no código para apontar para o WordPress</li>
          </ol>
          <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 12 }}>
            💡 <strong>Dica:</strong> As imagens apontam para <code style={{ background: '#1f2937', padding: '2px 6px', borderRadius: 4 }}>{PUBLISHED_URL}</code> — funcionam imediatamente, mas recomendamos hospedar no WordPress para performance.
          </p>
        </div>

        {/* Copy All */}
        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <CopyAllButton />
        </div>

        {/* Sections */}
        <h2 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 16px', color: '#d1d5db' }}>Seções da Home ({HOME_SECTIONS.length})</h2>
        {HOME_SECTIONS.map(section => (
          <SectionCard key={section.id} section={section} />
        ))}

        {/* Media */}
        <h2 style={{ fontSize: 16, fontWeight: 700, margin: '40px 0 16px', color: '#d1d5db' }}>📁 Mídia para download</h2>
        {Object.entries(MEDIA_FILES).map(([cat, files]) => (
          <MediaSection key={cat} category={cat} files={files} />
        ))}

        {/* Design Tokens */}
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: 12, padding: 24, marginTop: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#d1d5db', margin: '0 0 12px' }}>🎨 Design Tokens</h2>
          <pre style={{ background: '#0d1117', padding: 16, borderRadius: 8, fontSize: 12, color: '#7ee787', overflow: 'auto', margin: 0 }}>{`/* Cores */
Roxo principal:    #540247
Roxo hover:        #5C1660
Verde accent:      #00BFA6 / #2BC1A4
Fundo claro:       #FDFCF8
Texto:             #000000
Texto corpo:       #555555
WhatsApp verde:    #16a34a
Dourado accent:    #D2A170

/* Tipografia */
Títulos:  'Playfair Display', Georgia, serif
Corpo:    system-ui, sans-serif
H1/H2:   30px desktop / 24px mobile
Corpo:    14px, line-height 1.7

/* Botões */
Border-radius: 10px
Padding:       12px 32px`}</pre>
          <div style={{ marginTop: 12 }}>
            <CopyButton
              text={`Roxo: #540247\nVerde: #00BFA6\nFundo: #FDFCF8\nTexto: #000\nCorpo: #555\nWhatsApp: #16a34a\nTítulos: Playfair Display\nCorpo: system-ui\nH1/H2: 30px desktop / 24px mobile\nCorpo: 14px`}
              label="Copiar tokens"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportPages;
