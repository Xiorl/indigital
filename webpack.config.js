const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * @type { import("webpack").Configuration }
 */

const config = {
   mode: "development",
   entry: "./index.js",

   output: {
      filename: "app.bundle.js",
      path: path.resolve(__dirname, "dist"),
   },

   resolve: {
      extensions: [".js", ".jsx"],
   },

   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
         },
         {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: "file-loader",
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: "file-loader",
         },
      ],
   },

   plugins: [new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
   })],
};

module.exports = config;
