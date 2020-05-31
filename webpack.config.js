const path = require("path");
const webpack = require("webpack");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Here the application starts executing and webpack starts bundling
    entry: {
        index: "./src/index.es6",
    },
    // the target directory for all output files
    output: {
        library: "Pagination",
        libraryExport: "default",
        path: path.resolve(__dirname, "dist"),
    },
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    mode: "development",
    // configuration regarding modules
    module: {
        // rules for modules (configure loaders, parser options, etc.)
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    resolve: {
        alias: {
            modules: path.resolve(__dirname + "../node_modules"),
        },
        extensions: [".es6", ".js", ".scss"],
    },
    plugins: [
        new uglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
