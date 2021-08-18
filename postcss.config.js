module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-custom-media': {
      importFrom: ['./styles/resolution.css'],
    },
  },
};
