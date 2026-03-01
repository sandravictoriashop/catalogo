# Moda de Baño y Pijamas – Catálogo

Web React (Vite) del catálogo: **3 productos por fila en desktop** y **1 por fila en móvil**, con el mismo diseño. Pensada para poder copiar secciones y crear más páginas de catálogo.

## Requisitos

- Node.js (recomendado: usar `nvm use node` para la última versión)

## Instalación

```bash
nvm use node   # opcional: asegura usar la última Node
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Publicar en GitHub Pages

1. Instala la dependencia para desplegar:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Crea el repositorio en GitHub (por ejemplo `moda-catalogo`) y enlázalo con tu proyecto.

3. En `vite.config.js`, el `base` está en `'/moda-catalogo/'`.  
   - Si la URL será `https://tu-usuario.github.io/moda-catalogo/`, déjalo así.  
   - Si usas un repo tipo `tu-usuario.github.io` (página de usuario), cambia a `base: '/'`.

4. Despliega:

   ```bash
   npm run deploy
   ```

   La primera vez puede pedirte configurar `origin` y hacer push. La web quedará en la rama `gh-pages` y en la URL que configures en GitHub (Settings → Pages).

## Crear más catálogos (copiar secciones)

- **Grid del catálogo:** el componente `CatalogGrid` en `src/components/CatalogGrid.jsx` ya hace 3 columnas en desktop y 1 en móvil. Recibe `products`, `title` y `id`.
- **Ejemplo de sección:** en `src/sections/CatalogSection.example.jsx` tienes un ejemplo para copiar y crear otra página o sección con otro listado de productos.
- **Datos:** define arrays de productos en `src/data/` (misma estructura que `products.js`) e impórtalos donde uses `CatalogGrid`.
- **Páginas:** puedes duplicar la estructura de `App.jsx` en una nueva ruta (añadiendo React Router si quieres varias URLs) o simplemente añadir más `<CatalogGrid />` con distintos `products` y `title` en la misma página.

## Configurar WhatsApp

Edita `src/data/products.js`: cambia `WHATSAPP_NUMBER` por tu número (código de país + número, sin `+` ni 0 inicial). Ejemplo: Colombia `573001234567`.
