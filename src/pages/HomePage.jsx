import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SectionVestidos from '../components/SectionVestidos';
import SectionPijamas from '../components/SectionPijamas';
import SectionOfertasBanner from '../components/SectionOfertasBanner';
import Footer from '../components/Footer';
import { SHOW_OFERTAS } from '../data/config';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="inicio">
        <HeroSection />
        <SectionVestidos />
        <SectionPijamas />
        {SHOW_OFERTAS && <SectionOfertasBanner />}
      </main>
      <Footer />
    </>
  );
}
