const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
   fallbacks: {
    document: '/offline.html',
  },
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  reactStrictMode: true,
    experimental: {
    turbo: {
      resolveAlias: {
        'tailwindcss/colors': require.resolve('tailwindcss/colors'),
      },
    },
  },
 
};

module.exports = withPWA(nextConfig);
