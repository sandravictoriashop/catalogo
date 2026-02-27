import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUpOptions } from '../animations';
import './SectionBlock.css';

export default function SectionPijamas() {
  return (
    <motion.section
      className="section-block section section-block--alt"
      id="piyamas"
      initial={fadeInUpOptions.initial}
      whileInView={fadeInUpOptions.whileInView}
      viewport={fadeInUpOptions.viewport}
      transition={fadeInUpOptions.transition}
    >
      <div className="section-block__grid">
        <div className="section-block__content">
          <h2 className="section-block__title">Piyamas</h2>
          <p className="section-block__text">
            Nuestra colección de piyamas combina estilo y comodidad absoluta. Confeccionadas con
            tejidos premium de exquisita suavidad, cada pieza está diseñada para elevar tus noches
            y momentos de descanso con elegancia.
          </p>
          <Link to="/piyamas" className="section-block__btn section-block__btn--outline">
            Explorar Colección
          </Link>
        </div>
        <div className="section-block__image-wrap">
          <img
            src="https://res.cloudinary.com/dgzwczlza/image/upload/pijama-coraje_euvyqx.jpg"
            alt="Piyamas"
          />
        </div>
      </div>
    </motion.section>
  );
}
