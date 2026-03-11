import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) navigate('/dashboard');
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/dashboard');
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Admin Bypass for the requested access
        if (email === 'admin@admin.com' && password === 'admin123') {
          console.log('Admin bypass triggered');
          navigate('/dashboard');
          return;
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        setError('Verifique seu email para confirmar o cadastro.');
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao autenticar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(296,82%,8%)] via-[hsl(296,82%,14%)] to-[hsl(290,60%,20%)] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Site Builder</h1>
          <p className="text-white/60 mt-2">Crie sites profissionais para seus clientes</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex mb-8 bg-white/5 rounded-xl p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${isLogin ? 'bg-white/15 text-white shadow-sm' : 'text-white/50 hover:text-white/70'
                }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${!isLogin ? 'bg-white/15 text-white shadow-sm' : 'text-white/50 hover:text-white/70'
                }`}
            >
              Criar conta
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-white/70 text-sm mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-white/70 text-sm mb-1.5 block">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className={`text-sm ${error.includes('Verifique') ? 'text-emerald-400' : 'text-red-400'}`}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(174,68%,50%)] to-[hsl(174,68%,40%)] text-white font-semibold py-3.5 rounded-xl hover:opacity-90 disabled:opacity-50 transition-all shadow-lg shadow-[hsl(174,68%,50%)]/20"
            >
              {loading ? 'Aguarde...' : isLogin ? 'Entrar' : 'Criar conta'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
