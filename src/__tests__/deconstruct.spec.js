const deconstruct = require('../deconstruct');

describe('.deconstruct', () => {
  it('should be a function with arity 1', () => {
    // Assert
    expect(deconstruct).toBeInstanceOf(Function);
    expect(deconstruct).toHaveLength(1);
  });

  it('should return a JavaScript Object with no nested properties, maintaining arrays', () => {
    // Arrange
    const d = [
      {
        a: 'b'
      },
      {
        c: 'c'
      }
    ];

    const obj = {
      a: {
        b: {
          c: 'value'
        },
        d
      },
      e: 'value'
    };

    const expected = {
      'a.b.c': 'value',
      'a.d': d,
      e: 'value'
    };

    // Assert
    expect(deconstruct(obj)).toEqual(expected);
  });

  it('should return if attempting to deconstruct a non-object', () => {
    // Assert
    expect(deconstruct('a string')).toEqual('a string');
    expect(deconstruct(['an array'])).toEqual(['an array']);
    expect(deconstruct(1)).toEqual(1);
  });
});
