
# Petit Design

  Sitio de comercio electrónico de Petit Design, una marca colombiana de lencería para cunas y accesorios personalizados para bebés. Permite explorar colecciones y productos, elegir opciones de personalización como nombre, color, tipografía y tela, y gestionar el carrito conectado a Shopify. También ofrece contacto y pedidos por WhatsApp, con contenido en español e inglés.

  ## Tecnologías

  - React 19 y TypeScript
  - Vite 8
  - Tailwind CSS 4
  - Shopify Storefront API mediante `@shopify/storefront-api-client`
  - React Router para navegación
  - Zustand para estado compartido
  - Radix UI y Lucide React para componentes e iconos
  - ESLint para análisis estático

  ## Desarrollo

  Requiere Node.js y pnpm.

  ```bash
  pnpm install
  pnpm dev
  ```

  ## Comandos

  ```bash
  pnpm build     # Verifica TypeScript y genera la versión de producción
  pnpm lint      # Ejecuta ESLint
  pnpm preview   # Sirve localmente la versión compilada
  ```