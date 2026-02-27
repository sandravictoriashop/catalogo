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
            <Link to="/vestidos-de-bano" className="hero__btn">
              Colección Vestidos de Baño
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hero__block hero__block--piyamas"
          initial={heroBlockAnimation.initial}
          animate={heroBlockAnimation.animate}
          transition={{ ...heroBlockAnimation.transition, delay: 0.25 }}
        >
          <div className="hero__overlay">
            <Link to="/piyamas" className="hero__btn">
              Colección Piyamas
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hero__block hero__block--jumpers"
          initial={heroBlockAnimation.initial}
          animate={heroBlockAnimation.animate}
          transition={{ ...heroBlockAnimation.transition, delay: 0.4 }}
        >
          <div className="hero__overlay">
            <Link to="/jumpers" className="hero__btn">
              Colección Jumpers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
