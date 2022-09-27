const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, './build'),
   },
   mode: 'development',

   module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader', 
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  }
],
  },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
 };
