# Instrucciones para Agregar el Logo

Para que el logo aparezca correctamente en el sitio, debes guardar la imagen que subiste en el directorio `public/` con los siguientes nombres:

## Pasos:

1. **Logo para la navegación:**
   - Guarda la imagen como: `public/logo.png`
   - Formato recomendado: PNG con fondo transparente o circular
   - Tamaño: 50x50px (se ajustará automáticamente)

2. **Favicon (ícono del navegador):**
   - Guarda la imagen como: `public/favicon.ico`
   - Formato: ICO (puedes usar un conversor online si tienes PNG)
   - Tamaño recomendado: 32x32px o 48x48px

## Conversores online gratuitos (opcional):

Si necesitas convertir tu imagen PNG a ICO:
- https://www.icoconverter.com/
- https://convertio.co/es/png-ico/
- https://favicon.io/

## Resultado:

Una vez guardes ambos archivos, el servidor de desarrollo detectará los cambios automáticamente y verás:
- El logo en la esquina superior izquierda de la navegación
- El favicon en la pestaña del navegador

## Estructura esperada:

```
paulomendez_dot_cl/
├── public/
│   ├── logo.png      ← Tu imagen aquí
│   └── favicon.ico   ← Tu imagen convertida a ICO aquí
├── app/
├── components/
└── ...
```
