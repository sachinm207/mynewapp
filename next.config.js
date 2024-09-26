const withPWA = async () => {
  const pwa = await import('next-pwa')
  return pwa.default({
  dest: 'public',
  register: true,
  skipWaiting: true,
 /// disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/www\.gstatic\.com\/firebasejs\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'firebase-scripts',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /^https:\/\/www\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-apis',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
})
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable HTTPS
  server: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem',
    }
  }
}

module.exports = async () => {
  const pwaConfig = await withPWA()
  return pwaConfig(nextConfig)
}