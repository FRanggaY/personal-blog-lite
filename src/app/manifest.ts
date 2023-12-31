import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
      name: 'Personal Blog Lite',
      short_name: 'Personal Blog',
      description: 'Personal Blog',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      // icons: [
      //   {
      //     src: '/assets/logo/favicon-32x32.png',
      //     sizes: '32x32',
      //     type: 'image/png',
      //   },
      //   {
      //     src: '/assets/logo/favicon.ico',
      //     sizes: '16x16',
      //     type: 'image/png',
      //   },
      //       {
      //     src: '/android-chrome-192x192.png',
      //     sizes: '192x192',
      //     type: 'image/png',
      //   },
      //       {
      //     src: '/android-chrome-512x512',
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      // ],
    }
  }
