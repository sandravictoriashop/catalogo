import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInOptions } from '../animations';
import './SectionOfertasBanner.css';

export default function SectionOfertasBanner() {
  return (
    <motion.section
      className="ofertas-banner"
      id="ofertas"
      initial={fadeInOptions.initial}
      whileInView={fadeInOptions.whileInView}
      viewport={fadeInOptions.viewport}
      transition={fadeInOptions.transition}
    >
      <div className="ofertas-banner__inner section">
        <h2 className="ofertas-banner__title">Ofertas de Temporada</h2>
        <p className="ofertas-banner__text">
          Explora nuestra curaduría de temporada. Diseños exclusivos de vestidos de baño y piyamas
          boutique con beneficios especiales. El balance perfecto entre estilo y descanso.
        </p>
        <Link to="/ofertas" className="ofertas-banner__btn">
          Ir a ofertas
        </Link>
      </div>
    </motion.section>
  );
}
