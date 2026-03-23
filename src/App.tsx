import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrJoaoFalcao from './pages/DrJoaoFalcao';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DrJoaoFalcao />} />
                <Route path="*" element={<DrJoaoFalcao />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
