const stringLength = require('./index.js');
test('returns character count for valid string lengths', () => {
  expect(stringLength('a')).toBe(1);    // Testing for string length 1
  expect(stringLength('abcdefghi')).toBe(9);  // Testing for string length 9

});

test('throws error for invalid string lengths', () => {
  // Test cases for string lengths less than 1 and greater than 10
  expect(() => stringLength('')).toThrow("String length must be between 1 and 10 characters.");
  expect(() => stringLength('abcdefghijkl')).toThrow("String length must be between 1 and 10 characters.");
});

