import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUpOptions } from '../animations';
import './SectionBlock.css';

export default function SectionVestidos() {
  return (
    <motion.section
      className="section-block section"
      id="vestidos"
      initial={fadeInUpOptions.initial}
      whileInView={fadeInUpOptions.whileInView}
      viewport={fadeInUpOptions.viewport}
      transition={fadeInUpOptions.transition}
    >
      <div className="section-block__grid section-block__grid--image-left">
        <div className="section-block__image-wrap">
          <img
            src="https://res.cloudinary.com/dgzwczlza/image/upload/bikini-varios_xkjqc7.jpg"
            alt="Vestidos de baño"
          />
        </div>
        <div className="section-block__content">
          <h2 className="section-block__title">Vestidos de Baño</h2>
          <p className="section-block__text">
            Explora nuestra selección editorial de piezas diseñadas para elevar tu estilo bajo el sol.
            Un equilibrio perfecto entre la sofisticación artesanal y la comodidad suprema.
          </p>
          <Link to="/vestidos-de-bano" className="section-block__btn section-block__btn--outline">
            Ver Colección
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
