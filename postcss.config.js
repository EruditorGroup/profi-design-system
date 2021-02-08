module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    require('postcss-custom-properties')({
      importFrom: './src/styles/theme.scss',
    }),
  ],
};
