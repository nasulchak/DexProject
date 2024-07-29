import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

module.exports = {
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  mode: "development",

  entry: "./src/index.tsx",

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: ["src", "node_modules"],
    mainFiles: ["index"],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ],
};
