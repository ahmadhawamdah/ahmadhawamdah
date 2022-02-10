module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://google.com/about',
        permanent: false
      }
    ];
  },
}
