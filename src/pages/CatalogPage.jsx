import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import CatalogProductCard from "../components/CatalogProductCard";
import Footer from "../components/Footer";
import { vestidosProducts } from "../data/products";
import { staggerContainer, staggerItem, staggerViewport } from "../animations";
import "./CatalogPage.css";

/** Subcategoría en URL -> nombre para mostrar */
const SUBCATEGORY_LABELS = {
  bikini: "Bikini",
  asoleador: "Asoleador",
  enterizo: "Enterizo",
};

export default function CatalogPage() {
  const { subcategory: subcategorySlug } = useParams();
  const subcategoryName = subcategorySlug
    ? SUBCATEGORY_LABELS[subcategorySlug.toLowerCase()]
    : null;

  const sections = subcategoryName
    ? [
        {
          name: subcategoryName,
          products: vestidosProducts.filter(
            (p) => (p.subcategory ?? "") === subcategoryName,
          ),
        },
      ]
    : [{ name: null, products: vestidosProducts }];

  const pageTitle = subcategoryName
    ? `Colección ${subcategoryName}`
    : "Colección Vestidos de Baño";

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
          {pageTitle}
        </motion.h1>
        {sections.map(({ name, products }) => (
          <motion.section
            key={name ?? "all"}
            className="catalog-page__subcategory"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={staggerViewport}
          >
            <motion.div
              className="catalog-page__grid"
              variants={staggerContainer}
            >
              {products.map((product) => (
                <motion.div key={product.code} variants={staggerItem}>
                  <CatalogProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </main>
      <Footer />
    </>
  );
}
