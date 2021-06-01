const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "frontend", "app.jsx"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "assets/bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./build"),
    open: true,
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "frontend", "index.html"),
    }),
    new FaviconsWebpackPlugin("./frontend/assets/favicon.png"),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
}
