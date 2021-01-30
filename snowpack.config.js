/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv', '@snowpack/plugin-postcss'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
    
  },
  devOptions: {
    output: 'dashboard',
    hmrErrorOverlay: false
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  
};
