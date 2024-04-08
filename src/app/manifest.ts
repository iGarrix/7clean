import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#16BF78',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: '7Clean',
    short_name: '7Clean',
    description: '7Clean cleaning services',
    icons: [
      {
        src: '/pwa-image-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-image-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
