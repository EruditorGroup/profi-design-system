const { CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR } = require("./.config");
const path = require("path");

// Should we replace style imports into css-modules classes mapping?
// NOTE: it isn`t generate any css bundles. If you need change something in styles bundling, check webpack config.
const transformCssImports = !!process.env.CSS_MODULES;

// Production flag, used in a few plugins/presets
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  presets: [
    process.env.MODULE_TYPE === "cjs" && [
      "@babel/preset-env",
      { targets: { node: "current" } },
    ],
    [
      "@babel/preset-typescript",
      { allExtensions: true, allowDeclareFields: true, isTSX: true },
    ],
    "@babel/preset-react",
  ].filter(Boolean),
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    transformCssImports && [
      "css-modules-transform",
      {
        devMode: !isProduction,
        keepImport: false,
        generateScopedName: (localName, filePath) =>
          CSS_MODULE_LOCAL_IDENT_NAME_GENERATOR(localName, filePath),
        extensions: [".css", ".scss"],
        preprocessCss: path.resolve(__dirname, "processSass.js"),
      },
    ],
  ].filter(Boolean),
};
