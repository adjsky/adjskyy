const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
    open: false,
    compress: true,
    port: 8081,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "frontend", "index.html"),
      favicon: "./frontend/assets/favicon.svg",
    }),
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
