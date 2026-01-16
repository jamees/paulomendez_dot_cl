# 🚀 Guía de Deployment - Paulo Méndez

## ✅ Build Completado

El sitio ya está compilado correctamente. Next.js guarda el build en `.next/` (no en `dist`).

## 📦 Opciones de Deployment

### Opción 1: Archivos Estáticos (HTML/CSS/JS) - **CONFIGURADO** ✓

Con la configuración actual, Next.js generará archivos estáticos en la carpeta `out/`.

#### Comandos:
```bash
npm run build
```

Esto generará la carpeta **`out/`** con todos los archivos estáticos listos para subir a cualquier hosting.

#### Dónde subir la carpeta `out/`:
- **GitHub Pages**
- **Netlify** (arrastra la carpeta)
- **Vercel** (automático)
- **Hosting tradicional** (cPanel, FTP, etc.)
- **Firebase Hosting**
- **AWS S3**
- Cualquier servidor web estático

---

### Opción 2: Servidor Next.js (SSR)

Si quieres usar el servidor de Next.js con todas sus funcionalidades:

```bash
# 1. Build
npm run build

# 2. Iniciar servidor de producción
npm run start
```

El servidor correrá en `http://localhost:3000`

#### Dónde deployar con servidor:
- **Vercel** (recomendado - creadores de Next.js)
- **Netlify**
- **Railway**
- **Render**
- **Digital Ocean**
- **AWS / Azure / Google Cloud**

---

## 🎯 Recomendación Actual

Con la configuración que acabo de hacer (`output: 'export'`):

### **Pasos para deployment estático:**

1. **Build:**
   ```bash
   npm run build
   ```

2. **Resultado:**
   - Se creará la carpeta `out/` en la raíz del proyecto
   - Contiene todos los archivos HTML, CSS, JS, imágenes optimizadas

3. **Subir:**
   - Sube el contenido de la carpeta `out/` a tu hosting
   - El archivo principal es `out/index.html`

---

## 🌐 Deployment con Netlify (Recomendado para estático)

### Opción A: Drag & Drop
1. Ejecuta `npm run build`
2. Ve a [netlify.com](https://netlify.com)
3. Arrastra la carpeta `out/` a Netlify
4. ¡Listo! Tu sitio estará online

### Opción B: GitHub + Netlify (Automático)
1. Sube el código a GitHub
2. Conecta el repositorio en Netlify
3. Configuración de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Netlify hará deploy automático en cada push

---

## 🔄 Deployment con Vercel (Recomendado para Next.js)

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará Next.js automáticamente
4. Deploy automático en cada push
5. URL personalizable y CDN global incluido

---

## ⚠️ Nota Importante

**Con `output: 'export'`:**
- ✅ Sitio 100% estático
- ✅ Funciona en cualquier hosting
- ✅ Muy rápido
- ✅ Sin costo de servidor
- ❌ No hay API routes
- ❌ No hay SSR (Server Side Rendering)

**Para tu caso (sitio de portafolio):** La opción estática es perfecta ✓

---

## 📂 Estructura después del Build

```
paulomendez_dot_cl/
├── out/                    ← Carpeta con archivos estáticos
│   ├── index.html         ← Página principal
│   ├── _next/             ← CSS, JS optimizados
│   ├── logo.png           ← Logo
│   └── favicon.ico        ← Favicon
├── .next/                 ← Build de Next.js (no subir)
└── ...
```

---

## 🎨 Tu Sitio

- **Nombre:** Paulo Méndez - Haute Couture
- **Email:** paulomendezatelier@gmail.com
- **Paleta:** Navy (#19304B), Cream (#F8F6F1), Gold (#D4AF37)
- **Secciones:** Inicio, Sobre Mí, Contacto
- **Estado:** ✅ Listo para deployment

---

## 💡 Próximos Pasos

1. Ejecuta `npm run build`
2. Verifica que se creó la carpeta `out/`
3. Elige tu plataforma de hosting
4. Sube la carpeta `out/` o conecta con GitHub
5. ¡Tu sitio estará online!
