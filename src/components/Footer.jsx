import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../data/config';
import { fadeInOptions } from '../animations';
import './Footer.css';

export default function Footer() {
  const whatsappUrl = getWhatsAppLink('Hola, quiero más información');

  return (
    <motion.footer
      className="footer"
      initial={fadeInOptions.initial}
      whileInView={fadeInOptions.whileInView}
      viewport={fadeInOptions.viewport}
      transition={fadeInOptions.transition}
    >
      <div className="footer__inner section">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <span className="footer__text">Contáctame a mi WhatsApp</span>
          <span className="footer__icon" aria-hidden>💬</span>
        </a>
      </div>
    </motion.footer>
  );
}
