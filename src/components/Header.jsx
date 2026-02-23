import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { headerAnimation } from '../animations';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="header"
      initial={headerAnimation.initial}
      animate={headerAnimation.animate}
      transition={headerAnimation.transition}
    >
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-icon">〰</span>
          <span>Sandra Victoria</span>
        </Link>

        <button
          type="button"
          className="header__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-hidden={!menuOpen}>
          <button
            type="button"
            className="header__close-x"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
            <span className="header__hamburger-bar" />
          </button>
          <Link to="/" onClick={closeMenu}>Inicio</Link>
          <Link to="/catalogo" onClick={closeMenu}>Vestidos de Baño</Link>
          <Link to="/" onClick={closeMenu}>Pijamas</Link>
          <Link to="/" onClick={closeMenu}>Ofertas</Link>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
