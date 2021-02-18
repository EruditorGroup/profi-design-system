module.exports = {
  syntax: require('postcss-scss'),
  plugins: [
    require('postcss-value-parser'),
    require('precss'),
    require('autoprefixer'),
    require('postcss-custom-properties')({
      importFrom: './src/styles/theme.scss',
    }),
  ],
};
