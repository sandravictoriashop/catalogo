import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SectionVestidos from '../components/SectionVestidos';
import SectionPijamas from '../components/SectionPijamas';
import SectionOfertasBanner from '../components/SectionOfertasBanner';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="inicio">
        <HeroSection />
        <SectionVestidos />
        <SectionPijamas />
        <SectionOfertasBanner />
      </main>
      <Footer />
    </>
  );
}
