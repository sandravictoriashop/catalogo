/** Productos para la página "Colección Vestidos de Baño" */
export const vestidosProducts = [
  {
    id: 'v1',
    title: 'Bikini amarillo con detalle creativo',
    image: 'https://images.unsplash.com/photo-1576567739864-875f1c87288d?w=400&q=80',
    sizes: ['S', 'M', 'L'],
    price: '89.900',
    whatsappMessage: 'Hola, me interesa el Bikini amarillo con detalle creativo',
  },
  {
    id: 'v2',
    title: 'Bikini verde con vuelos en hombros',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80',
    sizes: ['S', 'M', 'L'],
    price: '89.900',
    whatsappMessage: 'Hola, me interesa el Bikini verde con vuelos en hombros',
  },
  {
    id: 'v3',
    title: 'Bikini fucsia con estampado palmeras',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    sizes: ['M', 'L'],
    price: '89.900',
    whatsappMessage: 'Hola, me interesa el Bikini fucsia con estampado palmeras',
  },
  {
    id: 'v4',
    title: 'Bikini negro con detalle metalizado',
    image: 'https://images.unsplash.com/photo-1576567739864-875f1c87288d?w=400&q=80',
    sizes: ['S', 'M', 'L'],
    price: '89.900',
    whatsappMessage: 'Hola, me interesa el Bikini negro con detalle metalizado',
  },
  {
    id: 'v5',
    title: 'Bikini coral con corte high waist',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80',
    sizes: ['S', 'M', 'L'],
    price: '89.900',
    whatsappMessage: 'Hola, me interesa el Bikini coral con corte high waist',
  },
  {
    id: 'v6',
    title: 'Bikini blanco con encaje',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    sizes: ['S', 'M'],
    price: '89.900',
    whatsappMessage: 'Hola, me interesa el Bikini blanco con encaje',
  },
];

const WHATSAPP_NUMBER = '573001234567'; // Reemplaza con tu número (código país + número sin + ni 0 inicial)

export function getWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
