import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUpOptions } from '../animations';
import './SectionBlock.css';

export default function SectionPijamas() {
  return (
    <motion.section
      className="section-block section section-block--alt"
      id="pijamas"
      initial={fadeInUpOptions.initial}
      whileInView={fadeInUpOptions.whileInView}
      viewport={fadeInUpOptions.viewport}
      transition={fadeInUpOptions.transition}
    >
      <div className="section-block__grid">
        <div className="section-block__content">
          <h2 className="section-block__title">Pijamas</h2>
          <p className="section-block__text">
            Nuestra colección de pijamas combina estilo y comodidad absoluta. Confeccionadas con
            tejidos premium de exquisita suavidad, cada pieza está diseñada para elevar tus noches
            y momentos de descanso con elegancia.
          </p>
          <Link to="/pijamas" className="section-block__btn section-block__btn--outline">
            Explorar Colección
          </Link>
        </div>
        <div className="section-block__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
            alt="Pijamas"
          />
        </div>
      </div>
    </motion.section>
  );
}
