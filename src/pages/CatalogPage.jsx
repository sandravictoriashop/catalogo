import { motion } from 'framer-motion';
import Header from '../components/Header';
import CatalogProductCard from '../components/CatalogProductCard';
import Footer from '../components/Footer';
import { vestidosProducts } from '../data/products';
import { staggerContainer, staggerItem, staggerViewport } from '../animations';
import './CatalogPage.css';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="catalog-page">
        <motion.h1
          className="catalog-page__title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Colección Vestidos de Baño
        </motion.h1>
        <motion.div
          className="catalog-page__grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={staggerViewport}
        >
          {vestidosProducts.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <CatalogProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
