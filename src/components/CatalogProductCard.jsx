import { useState, useRef, useCallback } from 'react';
import { getWhatsAppLink, formatWhatsAppMessage } from '../data/config';
import './CatalogProductCard.css';

/** Normaliza image (string o array) a array de URLs */
function getImages(image) {
  if (Array.isArray(image)) return image.filter(Boolean);
  return image ? [image] : [];
}

const SWIPE_THRESHOLD = 50;

export default function CatalogProductCard({ product }) {
  const { code, title, image, sizes, price, oldPrice, whatsappMessage } = product;
  const images = getImages(image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const wrapRef = useRef(null);

  const message = whatsappMessage
    ? formatWhatsAppMessage(whatsappMessage, product).replace('me interesa', 'quisiera añadir a la cesta')
    : '';
  const whatsappUrl = getWhatsAppLink(message);

  const showSlider = images.length > 1;
  const displaySrc = images[currentIndex] ?? images[0];

  const goTo = useCallback((delta) => {
    setCurrentIndex((prev) => (prev + delta + images.length) % images.length);
  }, [images.length]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (touchStartX.current == null) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const w = wrap.clientWidth;
    const delta = e.touches[0].clientX - touchStartX.current;
    const capped = Math.max(-w * 0.4, Math.min(w * 0.4, delta));
    setIsDragging(true);
    setDragOffsetPx(capped);
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;
    setIsDragging(false);
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      goTo(deltaX > 0 ? -1 : 1);
    }
    setDragOffsetPx(0);
  }, [goTo]);

  return (
    <article className="catalog-product-card">
      <div
        ref={wrapRef}
        className={`catalog-product-card__image-wrap${showSlider ? ' catalog-product-card__image-wrap--slider' : ''}`}
        {...(showSlider && {
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
        })}
      >
        {showSlider ? (
          <>
            <div
              className="catalog-product-card__track"
              style={{
                '--slide-count': images.length,
                transform: `translateX(calc(-${currentIndex} * 100% / var(--slide-count) + ${dragOffsetPx}px))`,
                transition: isDragging ? 'none' : 'transform 0.3s ease',
              }}
            >
              {images.map((src, i) => (
                <div key={i} className="catalog-product-card__slide">
                  <img src={src} alt={title} className="catalog-product-card__image" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="catalog-product-card__dots" aria-label="Cambiar imagen">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`catalog-product-card__dot ${i === currentIndex ? 'catalog-product-card__dot--active' : ''}`}
                  aria-label={`Imagen ${i + 1} de ${images.length}`}
                  aria-current={i === currentIndex ? 'true' : undefined}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </>
        ) : (
          <img
            src={displaySrc}
            alt={title}
            className="catalog-product-card__image"
            loading="lazy"
          />
        )}
      </div>
      {code && <p className="catalog-product-card__code">{code}</p>}
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
    </article>
  );
}
