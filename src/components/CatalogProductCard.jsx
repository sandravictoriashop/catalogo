import { motion } from 'framer-motion';
import { getWhatsAppLink, formatWhatsAppMessage } from '../data/config';
import { cardHover } from '../animations';
import './CatalogProductCard.css';

export default function CatalogProductCard({ product }) {
  const { title, image, sizes, price, oldPrice, whatsappMessage } = product;
  const message = whatsappMessage
    ? formatWhatsAppMessage(whatsappMessage, product).replace('me interesa', 'quisiera añadir a la cesta')
    : '';
  const whatsappUrl = getWhatsAppLink(message);

  return (
    <motion.article
      className="catalog-product-card"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={cardHover}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div className="catalog-product-card__image-wrap">
        <img src={image} alt={title} className="catalog-product-card__image" loading="lazy" />
      </div>
      <h3 className="catalog-product-card__title">{title}</h3>
      <div className="catalog-product-card__price-wrap">
        {oldPrice != null && oldPrice !== '' && (
          <span className="catalog-product-card__price-old">${oldPrice}</span>
        )}
        <span className="catalog-product-card__price">${price}</span>
      </div>
      <div className="catalog-product-card__sizes">
        {sizes.map((size) => (
          <span key={size} className="catalog-product-card__size-pill">{size}</span>
        ))}
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="catalog-product-card__btn"
      >
        Pregunta por Whatsapp
      </a>
    </motion.article>
  );
}
