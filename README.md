# dot-mutation

👷‍♀️Composition and Decomposition of JavaScript Objects using dot notation.

## Install

yarn

```
yarn add dot-mutation
```

or npm

```
npm i dot-mutation
```

## Usage

[![Edit Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zn666qqwl?autoresize=1&module=%2Fsrc%2Findex.js)

**deconstruct**

```javascript
function deconstruct(o: Object): Object
```

Returns a single level deep JavaScript Object where each key is a path, using dot notation, to the value of the input Object.

**construct**

```javascript
function construct(o: Object): Object
```

Returns a JavaScript Object where each key from the input Object is a path description to the output object. (ie. for input Object `o` a key of `o['a.b.c']` results in a path of `o.a.b.c`)

```javascript
const { construct, deconstruct } = require('dot-mutation');

const obj = {
  a: {
    b: {
      c: 'value'
    },
    d: [
      {
        nested: 'values'
      }
    ]
  },
  e: 'value'
};

console.log(deconstruct(obj));
// Outputs
// ===================
// {
//   'a.b.c': 'value',
//   'a.d': [
//     {
//       nested: 'values'
//     }
//   ],
//   'e' : 'value'
// }

const deconstructed = {
  'a.b.c': 'value',
  'a.d': [
    {
      nested: 'values'
    }
  ],
  e: 'value'
};

console.log(construct(deconstructed));
// Outputs
// ===================
// {
//   a: {
//     b: {
//       c: 'value'
//     }
//     d: [
//       {
//         nested: 'values'
//       }
//     ]
//   },
//   e: 'value'
// }
```
