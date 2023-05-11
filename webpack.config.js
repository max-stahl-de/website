const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
        }),
        new CompressionWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Max Stahl",
            template: "index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    optimization: {
        minimize: true,
        minimizer: [
            "...",
            new TerserPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [["mozjpeg", { progresive: true, quality: 50 }]],
                    },
                },
            }),
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        compress: true,
        port: 3000,
    },
    devtool: "source-map",
};
