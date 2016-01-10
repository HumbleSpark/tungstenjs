/**
 * Pre-compiles templates using Ractive and returns a module with all dependencies required
 *
 * Copyright 2015 Wayfair, LLC
 * Available under the Apache Version 2.0 License
 *
 * https://github.com/wayfair/tungstenjs
 *
 * @license Apache-2.0
 */
'use strict';

var path = require('path');
var _ = require('underscore');
var utils = require('./shared_utils');

/**
 * Compiles given templates
 * @param  {String} contents Root directory of templates to get stripped off partials
 */
module.exports = function(contents) {
  this.cacheable();
  var parsedTemplate = utils.compileTemplate(contents, module.src);
  var partials = utils.findPartials(parsedTemplate);
  var template = JSON.stringify(parsedTemplate);

  var templatePath = path.relative(path.dirname(module.dest), __dirname + '/template');
  templatePath = templatePath.replace(/\\/g, '/');

  var output = 'var Template=require("tungstenjs/src/template/template");';
  output += 'var template=new Template(' + template + ');';
  output += 'module.exports=template;';
  if (partials.length > 0) {
    output += 'template.setPartials({';
    output += _.map(partials, function(partial) {
      return '"' + partial + '":require("./' + partial + '.mustache")';
    }).join(',');
    output += '});';
  }

  return output;
};