import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExportPages from './pages/ExportPages';
import ImplantesDentarios from './pages/ImplantesDentarios';
import Ortodontia from './pages/Ortodontia';
import Endodontia from './pages/Endodontia';
import ProteseDentaria from './pages/ProteseDentaria';
import ClinicoGeral from './pages/ClinicoGeral';
import Periodontia from './pages/Periodontia';
import FacetasResina from './pages/FacetasResina';
import HarmonizacaoOrofacial from './pages/HarmonizacaoOrofacial';
import HomePreview from './pages/HomePreview';
import Links from './pages/Links';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import DrJoaoFalcao from './pages/DrJoaoFalcao';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Dashboard and Auth */}
                <Route path="/" element={<Auth />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Universal Project Route */}
                <Route path="/projeto/:slug" element={<HomePreview />} />

                {/* Sub-pages per project slug */}
                <Route path="/projeto/:slug/implantes" element={<ImplantesDentarios />} />
                <Route path="/projeto/:slug/ortodontia" element={<Ortodontia />} />
                <Route path="/projeto/:slug/endodontia" element={<Endodontia />} />
                <Route path="/projeto/:slug/protese-dentaria" element={<ProteseDentaria />} />
                <Route path="/projeto/:slug/clinico-geral" element={<ClinicoGeral />} />
                <Route path="/projeto/:slug/periodontia" element={<Periodontia />} />
                <Route path="/projeto/:slug/facetas-resina" element={<FacetasResina />} />
                <Route path="/projeto/:slug/harmonizacao" element={<HarmonizacaoOrofacial />} />

                {/* Utility Routes */}
                <Route path="/links" element={<Links />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
