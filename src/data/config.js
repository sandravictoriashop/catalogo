/** Número de WhatsApp: único lugar para Vestidos, Pijamas, Ofertas y resto de la web */
export const WHATSAPP_NUMBER = '573001234567'; // Código país + número sin + ni 0 inicial

/** Reemplaza {{title}}, {{price}}, {{sizes}}, {{oldPrice}} en el mensaje con los datos del producto */
export function formatWhatsAppMessage(template, product) {
  if (!template || !product) return template || '';
  return template
    .replace(/\{\{title\}\}/g, product.title ?? '')
    .replace(/\{\{price\}\}/g, product.price ?? '')
    .replace(/\{\{oldPrice\}\}/g, product.oldPrice ?? '')
    .replace(/\{\{sizes\}\}/g, Array.isArray(product.sizes) ? product.sizes.join(', ') : '');
}

/** Si message es vacío o no se pasa, devuelve solo el chat (sin texto prefijado). */
export function getWhatsAppLink(message) {
  const trimmed = (message ?? '').toString().trim();
  if (!trimmed) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(trimmed);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
