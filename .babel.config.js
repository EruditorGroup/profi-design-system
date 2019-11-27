const path = require("path");
const context = path.resolve(__dirname, "src");
module.exports = {
  presets: [["@babel/preset-typescript", { isTSX: true, allExtensions: true }]],
  plugins: [
    [
      "react-css-modules",
      {
        context,
        generateScopedName: "[name]__[local]-[hash:base64:5]",
        webpackHotModuleReloading: true,
        handleMissingStyleName: "ignore",
        autoResolveMultipleImports: true
      }
    ]
  ]
};
