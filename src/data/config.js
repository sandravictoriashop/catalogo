import { vestidosProducts } from './products';
import { pijamasProducts } from './pijamas';
import { jumpersProducts } from './jumpers';

/** Número de WhatsApp: único lugar para Vestidos, Pijamas, Ofertas y resto de la web */
export const WHATSAPP_NUMBER = '573104556362'; // Código país + número sin + ni 0 inicial

/** Si es true se muestra enlace, bloque hero y banner de Ofertas; si es false todo eso se oculta o se sustituye por Pijamas (el banner no se muestra) */
export const SHOW_OFERTAS = false;

/**
 * Arrays de productos que se revisan para la sección Ofertas.
 * Si un producto tiene isOnSale: true, aparecerá en Ofertas además de en su catálogo.
 * Añade o quita aquí los arrays que quieras (vestidos, pijamas, etc.).
 */
export const OFFER_SOURCE_ARRAYS = [vestidosProducts, pijamasProducts, jumpersProducts];

/** Reemplaza {{title}}, {{price}}, {{sizes}}, {{oldPrice}}, {{image}} en el mensaje con los datos del producto */
export function formatWhatsAppMessage(template, product) {
  if (!template || !product) return template || '';
  return template
    .replace(/\{\{title\}\}/g, product.title ?? '')
    .replace(/\{\{price\}\}/g, product.price ?? '')
    .replace(/\{\{oldPrice\}\}/g, product.oldPrice ?? '')
    .replace(/\{\{sizes\}\}/g, Array.isArray(product.sizes) ? product.sizes.join(', ') : '')
    .replace(/\{\{image\}\}/g, product.image ?? '');
}

/** Si message es vacío o no se pasa, devuelve solo el chat (sin texto prefijado). */
export function getWhatsAppLink(message) {
  const trimmed = (message ?? '').toString().trim();
  if (!trimmed) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(trimmed);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
