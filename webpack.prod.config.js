const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {

  entry: 'bootstrap?extractStyles!./app/components/app',

  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'app.js',
  },

  resolve: { extensions: [ '', '.js' ] },

  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },

      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },

      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
    ],
  },

  postcss: [ autoprefixer ],

};
