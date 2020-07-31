const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'//[name] hace referenci a los nombres de entry (home, precios, contacto)
    },
    module: { //Aquí van los loaders
        rules: [
            {
                test: /\.css$/, //tipo de archivo
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugins'
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}