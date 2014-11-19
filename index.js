'use strict';
// # Main Entry Point
//
// This is the entry point webpack loads when we
// are not testing. Normally all your app code would
// initialize here. This is however just a test to load
// [bootstrap](http://getbootstrap.com/) using
// [bootstrap-sass-webpack](https://github.com/justin808/bootstrap-sass-webpack)
var $ = require('jquery');

// Affix our navigation when scrolling past
// the main header.
$(function () {
  var $header = $('#header');
  $('#nav').affix({
    offset: {
      top: function () {
        return $header.offset().top + $header.outerHeight(true);
      }
    }
  });
});
