const path = require('path');
const postcssNormalize = require('postcss-normalize');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssNormalize()]
                        }
                    }
                ]
            },
            { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
};
