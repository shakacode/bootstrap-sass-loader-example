'use strict';
// ## Webpack Configuration
// This file is used for both testing under
// [karma-webpack](https://github.com/webpack/karma-webpack)
// and [gulp-webpack](https://github.com/shama/gulp-webpack).
//
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Uncomment next 2 lines to support an includePath of the bootstrapPathStylesheets
//var bootstrapPathStylesheets = path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets");
//console.log("boostrapPathStylesheets %s", boostrapPathStylesheets);

module.exports = {
  cache: true,
  // ### Output
  // karma-webpack will specify the output path when testing. This
  // setting is used for building.
  entry: [
    // Example of using customization file
    'bootstrap-sass!./bootstrap-sass.config.js'

    // NOTE
    // Uncomment these examples to see alternative

    // Uncomment this loads only the no-config version of bootstrap
    // NOTE: this won't build the CSS file, as you have to configure the extract text plugin.
    //'bootstrap-sass-loader'

    //Example of using customization file with ExtractTextPlugin
    //'bootstrap-sass!./bootstrap-sass.extract-text-plugin.config.js'  // using customization file

    // Alternative for including everything in stand-alone.scss after bootstrap with no access to bootstrap variables.
    // It's better to put this in the customization files referenced in bootstrap-sass.config.js
    //'bootstrap-sass-loader', './stand-alone.scss'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    // ### Loaders
    loaders: [
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-sass-loader has access to the jQuery object
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },

      // ToDo: custom path and source map option did not work
      //{ test: /\.scss$/,
      //  loader: "style!css!sass?outputStyle=expanded&sourceMap=true&includePaths[]=" + bootstrapPathStylesheets },

      // Needed for the css-loader when [bootstrap-sass-loader](https://github.com/justin808/bootstrap-sass-loader)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bootstrap-and-customizations.css")
  ]
};

