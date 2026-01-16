/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Genera carpeta 'out' con archivos estáticos
  images: {
    unoptimized: true, // Requerido para export estático
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
