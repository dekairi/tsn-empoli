const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const fs = require("fs");

const isProduction = process.env.NODE_ENV == "production";
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";

const config = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            favicon: './src/assets/logo.ico'
        }),
        new ModuleScopePlugin(resolveApp('src'), [resolveApp('package.json')])
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'url-loader']
            },
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = "development";
    }
    return config;
};
