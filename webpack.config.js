var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const context = path.resolve(__dirname, "src");

module.exports = {
  entry: "./index.ts",
  context: path.resolve(__dirname, "src"),
  output: {
    filename: "ui.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PROFI-UI",
      template: "./index.html",
      tagId: "root",
      tagName: "div"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
        query: {
          plugins: [
            "@babel/transform-react-jsx",
            [
              "react-css-modules",
              {
                context,
                handleMissingStyleName: "warn",
                webpackHotModuleReloading: true
              }
            ]
          ]
        },
        test: /\.ts$/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
};
