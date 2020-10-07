const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'//[name] hace referencia a los nombres de entry (home, precios, contacto)
    },
    devServer: {
        hot: true,
        open: true, //para abrir un tab en el navegador y no tener que abrir manualmente
        port: 9000,
    },
    module: { //Aquí van los loaders
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/, //tipo de archivo
                use: [
                     'style-loader',//CSS: ENTORNO DE DESARROLLO (más rápido)
                    'css-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/, //tipo de archivo
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 90000, //peso máximo para archivo en B64
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
,    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname, 'index.html')
        }),
        // new MiniCSSExtractPlugin({ //CSS: entorno de PRODUCCIÓN
        //     filename: 'css/[name].css'
        // })
    ]
}