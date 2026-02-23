import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../data/products';
import { cardHover } from '../animations';
import './CatalogProductCard.css';

export default function CatalogProductCard({ product }) {
  const { title, image, sizes, price, whatsappMessage } = product;
  const addToCartMessage = whatsappMessage.replace('me interesa', 'quisiera añadir a la cesta');
  const whatsappUrl = getWhatsAppLink(addToCartMessage);

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
      <p className="catalog-product-card__price">${price}</p>
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
