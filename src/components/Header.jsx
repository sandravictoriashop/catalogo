import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { headerAnimation } from "../animations";
import { SHOW_OFERTAS } from "../data/config";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vestidosOpen, setVestidosOpen] = useState(false);
  const [pijamasOpen, setPijamasOpen] = useState(false);
  const [jumpersOpen, setJumpersOpen] = useState(false);

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
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
          <span className="header__hamburger-bar" />
        </button>

        <nav
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-hidden={!menuOpen}
        >
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
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>

          <div
            className="header__vestidos"
            onMouseEnter={() => setVestidosOpen(true)}
            onMouseLeave={() => setVestidosOpen(false)}
          >
            <Link
              to="/vestidos-de-bano"
              onClick={closeMenu}
              className="header__vestidos-trigger"
            >
              Vestidos de Baño
            </Link>
            <div
              className={`header__dropdown ${vestidosOpen ? "header__dropdown--open" : ""}`}
              aria-hidden={!vestidosOpen}
            >
              <Link to="/vestidos-de-bano" onClick={closeMenu}>
                Ver todas
              </Link>
              <Link to="/vestidos-de-bano/bikini" onClick={closeMenu}>
                Bikinis
              </Link>
              <Link to="/vestidos-de-bano/enterizo" onClick={closeMenu}>
                Enterizos
              </Link>
              <Link to="/vestidos-de-bano/asoleador" onClick={closeMenu}>
                Asoleadores
              </Link>
            </div>
            <div className="header__vestidos-sub">
              <Link to="/vestidos-de-bano/bikini" onClick={closeMenu}>
                Bikinis
              </Link>
              <Link to="/vestidos-de-bano/enterizo" onClick={closeMenu}>
                Enterizos
              </Link>
              <Link to="/vestidos-de-bano/asoleador" onClick={closeMenu}>
                Asoleadores
              </Link>
            </div>
          </div>

          <div
            className="header__pijamas"
            onMouseEnter={() => setPijamasOpen(true)}
            onMouseLeave={() => setPijamasOpen(false)}
          >
            <Link
              to="/pijamas"
              onClick={closeMenu}
              className="header__pijamas-trigger"
            >
              Pijamas
            </Link>
            <div
              className={`header__dropdown ${pijamasOpen ? "header__dropdown--open" : ""}`}
              aria-hidden={!pijamasOpen}
            >
              <Link to="/pijamas" onClick={closeMenu}>
                Ver todas
              </Link>
              <Link to="/pijamas/pantalon" onClick={closeMenu}>
                Pantalón
              </Link>
              <Link to="/pijamas/short" onClick={closeMenu}>
                Short
              </Link>
            </div>
            <div className="header__pijamas-sub">
              <Link to="/pijamas/pantalon" onClick={closeMenu}>
                Pantalón
              </Link>
              <Link to="/pijamas/short" onClick={closeMenu}>
                Short
              </Link>
            </div>
          </div>

          <div
            className="header__jumpers"
            onMouseEnter={() => setJumpersOpen(true)}
            onMouseLeave={() => setJumpersOpen(false)}
          >
            <Link
              to="/jumpers"
              onClick={closeMenu}
              className="header__jumpers-trigger"
            >
              Jumpers
            </Link>
            <div
              className={`header__dropdown ${jumpersOpen ? "header__dropdown--open" : ""}`}
              aria-hidden={!jumpersOpen}
            >
              <Link to="/jumpers" onClick={closeMenu}>
                Ver todas
              </Link>
              <Link to="/jumpers/capri" onClick={closeMenu}>
                Brisa Essential
              </Link>
              <Link to="/jumpers/largo" onClick={closeMenu}>
                Edición Estelar
              </Link>
            </div>
            <div className="header__jumpers-sub">
              <Link to="/jumpers/capri" onClick={closeMenu}>
                Brisa Essential
              </Link>
              <Link to="/jumpers/largo" onClick={closeMenu}>
                Edición Estelar
              </Link>
            </div>
          </div>

          {SHOW_OFERTAS && (
            <Link to="/ofertas" onClick={closeMenu}>
              Ofertas
            </Link>
          )}
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
