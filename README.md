# Paulo Méndez - Haute Couture Portfolio

Sitio web minimalista y moderno para un diseñador de alta costura, con galería de trabajos y animaciones elegantes.

## ✨ Características

- 🎨 Diseño minimalista y elegante
- 📱 Totalmente responsive
- ⚡ Animaciones suaves con Framer Motion
- 🖼️ Galería interactiva de trabajos
- 🚀 Next.js 14 con App Router
- 💎 TypeScript para type safety
- 🎭 TailwindCSS para estilos modernos

## 🛠️ Tecnologías

- **Framework:** Next.js 14
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Playfair Display (serif) e Inter (sans-serif)

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📂 Estructura del Proyecto

```
.
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navigation.tsx      # Barra de navegación
│   ├── Hero.tsx            # Sección hero
│   ├── About.tsx           # Sección sobre mí
│   ├── Gallery.tsx         # Galería de trabajos
│   ├── Contact.tsx         # Sección de contacto
│   └── Footer.tsx          # Pie de página
├── public/                 # Archivos estáticos
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎨 Personalización

### Colores

Los colores se pueden modificar en `tailwind.config.ts` y `app/globals.css`.

### Imágenes de la Galería

Las imágenes de la galería están definidas en `components/Gallery.tsx`. Modifica el array `galleryItems` con tus propias imágenes:

```typescript
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Tu título',
    category: 'Tu categoría',
    image: 'https://tu-imagen.jpg',
  },
  // ... más items
]
```

### Información de Contacto

Modifica la información de contacto en `components/Contact.tsx`.

## 📱 Secciones

1. **Hero** - Introducción impactante con imagen de fondo
2. **Sobre Mí** - Descripción del diseñador y su filosofía
3. **Galería** - Muestra de trabajos realizados con efecto hover
4. **Contacto** - Información de contacto (email, teléfono, ubicación)
5. **Footer** - Información de copyright

## 🌐 Despliegue

El proyecto está optimizado para desplegar en:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- Cualquier plataforma que soporte Node.js

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

## 📄 Licencia

© 2026 Paulo Méndez. Todos los derechos reservados.
