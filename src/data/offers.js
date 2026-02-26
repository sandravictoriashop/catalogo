import { ofertasProducts } from './ofertas';
import { OFFER_SOURCE_ARRAYS } from './config';

/**
 * Lista unificada de ofertas:
 * - Productos en ofertas.js (manual)
 * - Productos con isOnSale: true en los arrays de OFFER_SOURCE_ARRAYS (config).
 * Si un code se repite, se mantiene el de ofertas.js.
 */
export function getOfferProducts() {
  const fromFlag = OFFER_SOURCE_ARRAYS.flat().filter((p) => p.isOnSale === true);
  const seen = new Set(ofertasProducts.map((p) => p.code));
  const extra = fromFlag.filter((p) => !seen.has(p.code));
  return [...ofertasProducts, ...extra];
}
