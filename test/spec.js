'use strict';

describe('require', function () {
  it('should not throw', function () {
    expect(function () {
      require('bootstrap-sass-webpack!../bootstrap-sass.config.js');
    }).not.to.throw();
  });
});

