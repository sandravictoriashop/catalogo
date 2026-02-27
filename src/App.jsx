import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import PijamasPage from "./pages/PijamasPage";
import JumpersPage from "./pages/JumpersPage";
import OfertasPage from "./pages/OfertasPage";
import { SHOW_OFERTAS } from "./data/config";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vestidos-de-bano" element={<CatalogPage />} />
        <Route
          path="/vestidos-de-bano/:subcategory"
          element={<CatalogPage />}
        />
        <Route path="/piyamas" element={<PijamasPage />} />
        <Route path="/piyamas/:subcategory" element={<PijamasPage />} />
        <Route path="/jumpers" element={<JumpersPage />} />
        <Route path="/jumpers/:subcategory" element={<JumpersPage />} />
        {SHOW_OFERTAS && <Route path="/ofertas" element={<OfertasPage />} />}
      </Routes>
    </HashRouter>
  );
}

export default App;
