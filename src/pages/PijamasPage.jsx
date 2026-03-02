import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import CatalogProductCard from "../components/CatalogProductCard";
import Footer from "../components/Footer";
import SectionYourStyle from "../components/SectionYourStyle";
import { pijamasProducts } from "../data/pijamas";
import { staggerContainer, staggerItem, staggerViewport } from "../animations";
import "./CatalogPage.css";

/** Subcategoría en URL → nombre para mostrar */
const SUBCATEGORY_LABELS = { pantalon: "Pantalón", short: "Short" };

export default function PijamasPage() {
  const { subcategory: subcategorySlug } = useParams();
  const subcategoryName = subcategorySlug
    ? SUBCATEGORY_LABELS[subcategorySlug.toLowerCase()]
    : null;

  const sections = subcategoryName
    ? [
        {
          name: SUBCATEGORY_LABELS[subcategorySlug.toLowerCase()],
          products: pijamasProducts.filter(
            (p) =>
              (p.subcategory ?? "").toLowerCase() ===
              subcategorySlug.toLowerCase(),
          ),
        },
      ]
    : [{ name: null, products: pijamasProducts }];

  const pageTitle = subcategoryName
    ? `Pijama ${subcategoryName}`
    : "Colección Pijamas";
  const pageDescription =
    "Pijamas suaves, cómodas y llenas de ternura. Nuestros diseños están hechos para acompañarte en noches relajadas y mañanas felices.";

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
        <motion.p
          className="catalog-page__description"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.25, 0.4, 0.25, 1],
            delay: 0.05,
          }}
        >
          {pageDescription}
        </motion.p>
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
      <SectionYourStyle
        title="Pijamas personalizadas"
        text="Si te gusta un estampado pero lo quieres en short o pantalón, lo hacemos posible."
        buttonText="Escríbenos por Whatsapp"
      />
      <Footer />
    </>
  );
}
