/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.funboy.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'funboy.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'funboy.com',
        port: '',
        pathname: '/cdn/**',
      }
    ],
  },
}

module.exports = nextConfig 