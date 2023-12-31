const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
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
        })
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'url-loader']
            },
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.pdf$/i,
                use: ["file-loader"],
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
