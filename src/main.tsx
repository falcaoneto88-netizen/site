import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error Boundary to prevent blank screens
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#fff', background: '#111', minHeight: '100vh' }}>
          <h1 style={{ color: '#C9A96E' }}>Erro ao carregar o site</h1>
          <pre style={{ color: '#f87171', whiteSpace: 'pre-wrap', marginTop: 16 }}>
            {this.state.error?.message}
          </pre>
          <pre style={{ color: '#888', fontSize: 12, marginTop: 8 }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: 20, padding: '10px 24px', background: '#C9A96E', color: '#000', border: 'none', borderRadius: 8, cursor: 'pointer' }}
          >
            Recarregar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Safe cache flush
try {
  const CACHE_VERSION = 'cache_flush_v16';
  if (!localStorage.getItem(CACHE_VERSION)) {
    Object.keys(localStorage).forEach(key => {
      if (key.includes('oral_unic') || key.includes('editor') || key.includes('cache_flush')) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem(CACHE_VERSION, '1');
  }
} catch (e) {
  console.warn('[CacheFlush] Error:', e);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
