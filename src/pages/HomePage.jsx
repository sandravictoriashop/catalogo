import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SectionOfertasBanner from '../components/SectionOfertasBanner';
import Footer from '../components/Footer';
import { SHOW_OFERTAS } from '../data/config';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="inicio">
        <HeroSection />
        {SHOW_OFERTAS && <SectionOfertasBanner />}
      </main>
      <Footer />
    </>
  );
}
