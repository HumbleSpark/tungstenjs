'use strict';

module.exports.childViews = function(childViews) {
  for (var selector in childViews) {
    if (selector.substr(0, 4) === '.js-') {
      throw new Error('Child views cannot start with a period: "' + selector + '"');
    } else if (selector.substr(0, 3) !== 'js-') {
      throw new Error('Child views must start with "js-": "' + selector + '"');
    }
  }
};
