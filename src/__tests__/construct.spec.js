const construct = require('../construct');

describe('.construct', () => {
  it('should be a function with arity 1', () => {
    // Assert
    expect(construct).toBeInstanceOf(Function);
    expect(construct).toHaveLength(1);
  });

  it('should return a JavaScript Object', () => {
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
      'a.b.c': 'value',
      'a.d': d,
      e: 'value'
    };

    const expected = {
      a: {
        b: {
          c: 'value'
        },
        d
      },
      e: 'value'
    };

    // Assert
    expect(construct(obj)).toEqual(expected);
  });

  it('should return if attempting to construct a non-object', () => {
    // Assert
    expect(construct('a string')).toEqual('a string');
    expect(construct(['an array'])).toEqual(['an array']);
    expect(construct(1)).toEqual(1);
  });
});
