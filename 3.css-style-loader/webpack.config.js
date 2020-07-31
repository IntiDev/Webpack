const path = require('path');

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
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}