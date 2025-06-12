/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // necessário para exportação estática
  images: {
    unoptimized: true // evita dependência do otimizador de imagem do Next.js
  }
};

module.exports = nextConfig;
