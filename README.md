bootstrap-sass-loader-example
=========================

Example of configuring webpack with bootstrap-sass using [bootstrap-sass-loader](https://github.com/justin808/bootstrap-sass-loader).

Run `gulp build && open dist/index.html` and then see the resulting test file.

Key files to configure:

1. [bootstrap-sass.config.js](https://github.com/justin808/bootstrap-sass-loader-example/blob/master/bootstrap-sass.config.js)
   References: [_pre-bootstrap-customizations.scss](https://github.com/justin808/bootstrap-sass-loader-example/blob/master/_pre-bootstrap-customizations.scss) 
   and [_bootstrap-customizations.scss](https://github.com/justin808/bootstrap-sass-loader-example/blob/master/_bootstrap-customizations.scss) and
   [_main.scss](https://github.com/justin808/bootstrap-sass-loader-example/blob/master/_main.scss)

2. [webpack.config.js](https://github.com/justin808/bootstrap-sass-loader-example/blob/master/webpack.config.js)

This example is based on this example for bootstrap, less version: [bootstrap-webpack-example](http://bline.github.io/bootstrap-webpack-example/).

See `gulpfile.js` for more information on gulp tasks to run, such as `gulp test`, `gulp webpack`, and `gulp build`.


Testing Changes in the Bootstrap Sass Loader
=======================================================
1. See this article [Debugging NodeJs and Webpack Loaders](http://forum.railsonmaui.com/t/debugging-nodejs-and-webpack-loaders/142)
2. Clone both this project and https://github.com/justin808/bootstrap-sass-loader
3. Use the npm link command per step #1 (see article)
4. Make some changes in the loader, put in some print statements maybe, then run `gulp webpack` to invoke the loader.
5. Then run `gulp build && open dist/index.html` and  the resulting file dist/index.html in the browser.

Referencing the github version of bootstrap-sass-loader
=======================================================
Substitute this line in your `package.json`:
 
    "bootstrap-sass-loader": "justin808/bootstrap-sass-loader#fix-order-defaults-sass-import",
 
 
 
 
Pull requests are welcome!

For more info see: http://www.railsonmaui.com and http://forum.railsonmaui.com.