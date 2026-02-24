import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import PijamasPage from './pages/PijamasPage';
import JumpersPage from './pages/JumpersPage';
import OfertasPage from './pages/OfertasPage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vestidos-de-bano" element={<CatalogPage />} />
        <Route path="/pijamas" element={<PijamasPage />} />
        <Route path="/jumpers" element={<JumpersPage />} />
        <Route path="/ofertas" element={<OfertasPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
