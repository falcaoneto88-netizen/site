import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Plus, ExternalLink, Copy, Trash2, LogOut, Globe, Clock, LayoutDashboard } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  slug: string;
  template: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [creating, setCreating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('oral-unic');
  const navigate = useNavigate();

  const ensureDefaultProjects = useCallback(async (userId: string) => {
    // 1. Oral Unic
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

    // 2. Dr. João Falcão
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
    console.log('[Dashboard] Montado, verificando auth...');
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('[Dashboard] Auth state change:', event, !!session);
      if (!session) navigate('/auth');
    });
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log('[Dashboard] getSession:', !!session);
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

  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      draft: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
      published: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
      archived: 'bg-white/5 text-white/40 border-white/10',
    };
    const labels: Record<string, string> = { draft: 'Rascunho', published: 'Publicado', archived: 'Arquivado' };
    return (
      <span className={`text-xs px-2.5 py-1 rounded-full border ${styles[status] || styles.draft}`}>
        {labels[status] || status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(296,82%,6%)] via-[hsl(290,70%,10%)] to-[hsl(296,82%,8%)]">
      {/* Header */}
      <header className="border-b border-white/8 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-[hsl(174,68%,50%)]" />
            <h1 className="text-xl font-bold text-white">Site Builder</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Title + Action */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Seus Projetos</h2>
            <p className="text-white/40 text-sm mt-1">{projects.length} projeto(s) criado(s)</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-[hsl(174,68%,50%)] to-[hsl(174,68%,40%)] text-white font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition shadow-lg shadow-[hsl(174,68%,50%)]/15"
          >
            <Plus className="w-4 h-4" />
            Novo Projeto
          </button>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-white/20 border-t-[hsl(174,68%,50%)] rounded-full animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Globe className="w-12 h-12 text-white/15 mx-auto mb-4" />
            <h3 className="text-white/60 text-lg font-medium mb-2">Nenhum projeto ainda</h3>
            <p className="text-white/30 text-sm mb-6">Crie seu primeiro site a partir do template</p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-xl hover:bg-white/15 transition"
            >
              <Plus className="w-4 h-4" />
              Criar projeto
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg truncate">{project.name}</h3>
                    <p className="text-white/30 text-sm mt-0.5">/{project.slug}</p>
                  </div>
                  {statusBadge(project.status)}
                </div>

                <div className="flex items-center gap-2 text-white/20 text-xs mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(project.created_at).toLocaleDateString('pt-BR')}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <button
                    onClick={() => navigate(`/projeto/${project.slug}`)}
                    className="flex items-center gap-1.5 text-[hsl(174,68%,50%)] text-sm hover:text-[hsl(174,68%,60%)] transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Abrir
                  </button>
                  <button
                    onClick={() => duplicateProject(project)}
                    className="flex items-center gap-1.5 text-white/40 text-sm hover:text-white/70 transition ml-auto"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id, project.name)}
                    className="flex items-center gap-1.5 text-white/40 text-sm hover:text-red-400 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[hsl(296,82%,10%)] border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Novo Projeto</h3>

            <div className="space-y-4">
              <div>
                <label className="text-white/70 text-sm mb-1.5 block">Nome do projeto</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition"
                  placeholder="Ex: Clínica São Paulo"
                />
              </div>

              <div>
                <label className="text-white/70 text-sm mb-1.5 block">Slug (URL)</label>
                <input
                  type="text"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition"
                  placeholder="clinica-sao-paulo"
                />
                <p className="text-white/25 text-xs mt-1">Será acessível em /projeto/{newSlug || 'slug'}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm mb-1.5 block">Template</label>
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-white/30 transition"
                >
                  <option value="oral-unic" className="bg-[hsl(296,82%,10%)]">🦷 Oral Unic (Padrão)</option>
                  <option value="joao-falcao" className="bg-[hsl(296,82%,10%)]">💉 Dr. João Falcão (Glúteos)</option>
                  <option value="universal" className="bg-[hsl(296,82%,10%)]">🌐 Landing Page Generativa (Blank)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 rounded-xl border border-white/10 text-white/60 hover:bg-white/5 transition"
              >
                Cancelar
              </button>
              <button
                onClick={createProject}
                disabled={creating || !newName.trim() || !newSlug.trim()}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[hsl(174,68%,50%)] to-[hsl(174,68%,40%)] text-white font-medium hover:opacity-90 disabled:opacity-50 transition"
              >
                {creating ? 'Criando...' : 'Criar Projeto'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
