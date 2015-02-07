'use strict';

describe('require', function () {
  it('should not throw when customized', function () {
    expect(function () {
      require('bootstrap-sass!../bootstrap-sass.config.js');
    }).not.to.throw();
  });

  it('should not throw for no customization', function () {
    expect(function () {
      require('bootstrap-sass-loader');
    }).not.to.throw();
  });
});

