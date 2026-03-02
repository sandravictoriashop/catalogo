import { motion } from "framer-motion";
import { fadeInOptions } from "../animations";
import { getWhatsAppLink } from "../data/config";
import "./SectionYourStyle.css";

/**
 * Banner "Tu estilo" reutilizable: título, texto y botón a WhatsApp.
 * Se usa al final de Vestidos de Baño y Pijamas para ofrecer diseños personalizados.
 */
export default function SectionYourStyle({
  title,
  text,
  buttonText = "Escríbenos por Whatsapp",
}) {
  const whatsappUrl = getWhatsAppLink("");

  return (
    <motion.section
      className="your-style-banner"
      initial={fadeInOptions.initial}
      whileInView={fadeInOptions.whileInView}
      viewport={fadeInOptions.viewport}
      transition={fadeInOptions.transition}
    >
      <div className="your-style-banner__inner section">
        <h2 className="your-style-banner__title">{title}</h2>
        <p className="your-style-banner__text">{text}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="your-style-banner__btn"
        >
          {buttonText}
        </a>
      </div>
    </motion.section>
  );
}
