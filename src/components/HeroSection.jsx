import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroBlockAnimation } from '../animations';
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
            <Link to="/catalogo" className="hero__btn">Explorar Catálogo</Link>
          </div>
        </motion.div>
        <motion.div
          className="hero__block hero__block--ofertas"
          initial={heroBlockAnimation.initial}
          animate={heroBlockAnimation.animate}
          transition={{ ...heroBlockAnimation.transition, delay: 0.25 }}
        >
          <div className="hero__overlay">
            <h2 className="hero__title">Ofertas</h2>
            <Link to="/" className="hero__btn">Ver Especiales</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
