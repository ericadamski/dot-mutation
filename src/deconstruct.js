'use strict';

const getIn = require('get-value');
const isObject = require('./utils/is-object');

function join(a, k) {
  return `${a ? `${a}.` : ''}${k}`;
}

function traverse(o) {
  const t = (o, a) => {
    if (!isObject(o)) return [a];

    return Object.keys(o)
      .map(k => t(o[k], join(a, k)))
      .reduce((c, v) => c.concat(v), []);
  };

  return t(o);
}

module.exports = function deconstruct(o) {
  if (!isObject(o)) return o;

  return traverse(o).reduce(
    (c, k) => Object.assign(c, { [k]: getIn(o, k) }),
    {}
  );
};
