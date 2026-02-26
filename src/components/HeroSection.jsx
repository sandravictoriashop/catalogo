import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroBlockAnimation } from '../animations';
import { SHOW_OFERTAS } from '../data/config';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <motion.div
          className="hero__block hero__block--catalogo"
          initial={heroBlockAnimation.initial}
          animate={heroBlockAnimation.animate}
          transition={{ ...heroBlockAnimation.transition, delay: 0.1 }}
        >
          <div className="hero__overlay">
            <h2 className="hero__title">Catálogo</h2>
            <Link to="/vestidos-de-bano" className="hero__btn">Explorar Catálogo</Link>
          </div>
        </motion.div>
        <motion.div
          className={`hero__block ${SHOW_OFERTAS ? 'hero__block--ofertas' : 'hero__block--pijamas'}`}
          initial={heroBlockAnimation.initial}
          animate={heroBlockAnimation.animate}
          transition={{ ...heroBlockAnimation.transition, delay: 0.25 }}
        >
          <div className="hero__overlay">
            <h2 className="hero__title">{SHOW_OFERTAS ? 'Ofertas' : 'Pijamas'}</h2>
            <Link to={SHOW_OFERTAS ? '/ofertas' : '/pijamas'} className="hero__btn">
              {SHOW_OFERTAS ? 'Ver Especiales' : 'Ver Pijamas'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
