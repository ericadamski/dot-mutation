'use strict';

const setIn = require('set-value');
const isObject = require('./utils/is-object');

module.exports = function construct(o) {
  if (!isObject(o)) return o;

  return Object.keys(o).reduce((c, k) => setIn(c, k, o[k]), {});
};
