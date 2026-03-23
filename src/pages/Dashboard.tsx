import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Plus, ExternalLink, Copy, Trash2, LogOut, Globe, Layers, Search, FileText } from 'lucide-react';
import ClientBriefingModal from '@/components/dashboard/ClientBriefingModal';

interface Project {
  id: string;
  name: string;
  slug: string;
  template: string;
  status: string;
  settings: any;
  created_at: string;
  updated_at: string;
}

const STATUS_CONFIG: Record<string, { label: string; dot: string; bg: string; text: string }> = {
  published: { label: 'Publicado', dot: 'bg-emerald-400', bg: 'bg-emerald-400/10', text: 'text-emerald-400' },
  review: { label: 'Em Revisão', dot: 'bg-amber-400', bg: 'bg-amber-400/10', text: 'text-amber-400' },
  changes: { label: 'Alteração', dot: 'bg-blue-400', bg: 'bg-blue-400/10', text: 'text-blue-400' },
  rejected: { label: 'Reprovado', dot: 'bg-red-400', bg: 'bg-red-400/10', text: 'text-red-400' },
  draft: { label: 'Rascunho', dot: 'bg-white/40', bg: 'bg-white/5', text: 'text-white/50' },
};

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [creating, setCreating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('oral-unic');
  const [searchQuery, setSearchQuery] = useState('');
  const [briefingProject, setBriefingProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const ensureDefaultProjects = useCallback(async (userId: string) => {
    const { data: oralUnic } = await supabase
      .from('projects')
      .select('id')
      .eq('slug', 'oral-unic')
      .eq('user_id', userId)
      .maybeSingle();

    if (!oralUnic) {
      await supabase.from('projects').insert({
        name: 'Oral Unic Feira de Santana',
        slug: 'oral-unic',
        user_id: userId,
        template: 'oral-unic',
        status: 'published',
      });
    }

    const { data: drFalcao } = await supabase
      .from('projects')
      .select('id')
      .eq('slug', 'dr-joao-falcao')
      .eq('user_id', userId)
      .maybeSingle();

    if (!drFalcao) {
      await supabase.from('projects').insert({
        name: 'Dr. João Falcão',
        slug: 'dr-joao-falcao',
        user_id: userId,
        template: 'joao-falcao',
        status: 'published',
      });
    }
  }, []);

  const fetchProjects = useCallback(async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setProjects(data as Project[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate('/auth');
    });
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        await ensureDefaultProjects(session.user.id);
        fetchProjects();
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate, fetchProjects, ensureDefaultProjects]);

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleNameChange = (name: string) => {
    setNewName(name);
    setNewSlug(generateSlug(name));
  };

  const createProject = async () => {
    if (!newName.trim() || !newSlug.trim()) return;
    setCreating(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const { error } = await supabase.from('projects').insert({
      name: newName.trim(),
      slug: newSlug.trim(),
      user_id: session.user.id,
      template: selectedTemplate,
    });

    if (error) {
      alert(error.message.includes('unique') ? 'Esse slug já existe. Escolha outro.' : error.message);
    } else {
      setShowModal(false);
      setNewName('');
      setNewSlug('');
      setSelectedTemplate('oral-unic');
      fetchProjects();
    }
    setCreating(false);
  };

  const deleteProject = async (id: string, name: string) => {
    if (!confirm(`Excluir o projeto "${name}"? Essa ação não pode ser desfeita.`)) return;
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  };

  const duplicateProject = async (project: Project) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const newSlugVal = `${project.slug}-copy-${Date.now().toString(36)}`;
    await supabase.from('projects').insert({
      name: `${project.name} (Cópia)`,
      slug: newSlugVal,
      user_id: session.user.id,
      template: project.template,
    });
    fetchProjects();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  const getPreviewUrl = (slug: string) => {
    return `${window.location.origin}/projeto/${slug}`;
  };

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusBadge = (status: string) => {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG.draft;
    return (
      <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${config.bg} ${config.text}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Subtle grid */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Header */}
      <header className="relative border-b border-white/[0.06] bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Layers className="w-4 h-4 text-black" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white leading-none">Site Builder</h1>
              <p className="text-[10px] text-white/30 mt-0.5">Painel de Controle</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/30 hover:text-white/60 text-xs transition px-3 py-2 rounded-lg hover:bg-white/[0.04]"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sair
          </button>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Title + Search + Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-white">Clientes</h2>
            <p className="text-white/30 text-xs mt-1">{projects.length} projeto(s)</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar cliente..."
                className="w-full sm:w-56 bg-white/[0.04] border border-white/[0.06] rounded-xl py-2.5 pl-9 pr-4 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-white/15 transition"
              />
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2.5 rounded-xl hover:bg-white/90 transition text-xs whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              Novo Cliente
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border-2 border-white/10 border-t-white rounded-full animate-spin" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-white/[0.06] border-dashed rounded-2xl">
            <Globe className="w-10 h-10 text-white/10 mx-auto mb-4" />
            <h3 className="text-white/40 text-sm font-medium mb-1">
              {searchQuery ? 'Nenhum resultado' : 'Nenhum cliente ainda'}
            </h3>
            <p className="text-white/20 text-xs mb-6">
              {searchQuery ? 'Tente outro termo de busca' : 'Crie o primeiro site para seu cliente'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-white/[0.06] text-white/60 px-4 py-2.5 rounded-xl hover:bg-white/10 transition text-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Criar projeto
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Preview Image */}
                <div className="relative aspect-[16/10] bg-white/[0.02] overflow-hidden">
                  <iframe
                    src={getPreviewUrl(project.slug)}
                    title={project.name}
                    className="w-[400%] h-[400%] origin-top-left scale-25 pointer-events-none border-0"
                    style={{ transform: 'scale(0.25)', transformOrigin: 'top left' }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => navigate(`/projeto/${project.slug}`)}
                      className="flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2.5 rounded-xl hover:bg-white/90 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Abrir Site
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm truncate">{project.name}</h3>
                      <p className="text-white/20 text-[11px] mt-0.5 font-mono">/{project.slug}</p>
                    </div>
                    {statusBadge(project.status)}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 pt-3 border-t border-white/[0.06]">
                    <button
                      onClick={() => navigate(`/projeto/${project.slug}`)}
                      className="flex items-center gap-1.5 text-white/40 hover:text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg hover:bg-white/[0.06] transition"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Abrir
                    </button>
                    <button
                      onClick={() => setBriefingProject(project)}
                      className="flex items-center gap-1.5 text-white/40 hover:text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg hover:bg-white/[0.06] transition"
                    >
                      <FileText className="w-3 h-3" />
                      Briefing
                    </button>
                    <button
                      onClick={() => duplicateProject(project)}
                      className="flex items-center gap-1.5 text-white/40 hover:text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg hover:bg-white/[0.06] transition"
                    >
                      <Copy className="w-3 h-3" />
                      Duplicar
                    </button>
                    <button
                      onClick={() => deleteProject(project.id, project.name)}
                      className="flex items-center gap-1.5 text-white/40 hover:text-red-400 text-[11px] font-medium px-2.5 py-1.5 rounded-lg hover:bg-red-400/10 transition ml-auto"
                    >
                      <Trash2 className="w-3 h-3" />
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-neutral-950 border border-white/[0.08] rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-6">Novo Cliente</h3>

            <div className="space-y-4">
              <div>
                <label className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2 block">Nome do projeto</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 px-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition"
                  placeholder="Ex: Clínica São Paulo"
                />
              </div>

              <div>
                <label className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2 block">Slug (URL)</label>
                <input
                  type="text"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 px-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition font-mono"
                  placeholder="clinica-sao-paulo"
                />
                <p className="text-white/20 text-[10px] mt-1.5 font-mono">/projeto/{newSlug || 'slug'}</p>
              </div>

              <div>
                <label className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2 block">Template</label>
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-white/20 transition appearance-none"
                >
                  <option value="oral-unic" className="bg-neutral-950">🦷 Oral Unic (Padrão)</option>
                  <option value="joao-falcao" className="bg-neutral-950">💉 Dr. João Falcão</option>
                  <option value="universal" className="bg-neutral-950">🌐 Landing Page (Blank)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 rounded-xl border border-white/[0.08] text-white/40 hover:text-white/60 hover:bg-white/[0.04] transition text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={createProject}
                disabled={creating || !newName.trim() || !newSlug.trim()}
                className="flex-1 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 disabled:opacity-30 transition text-sm"
              >
                {creating ? 'Criando...' : 'Criar Projeto'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Briefing Modal */}
      {briefingProject && (
        <ClientBriefingModal
          project={briefingProject}
          onClose={() => setBriefingProject(null)}
          onSaved={fetchProjects}
        />
      )}
    </div>
  );
};

export default Dashboard;
