const stringLength = require('./index.js');
test('returns character count for valid string lengths', () => {
  expect(stringLength('a')).toBe(1);    // Testing for string length 1
  expect(stringLength('abcdefghi')).toBe(9);  // Testing for string length 9
  // You can add more test cases for other valid lengths

  // Make sure to add separate expect statements for each possible string length
});

test('throws error for invalid string lengths', () => {
  // Test cases for string lengths less than 1 and greater than 10
  expect(() => stringLength('')).toThrow("String length must be between 1 and 10 characters.");
  expect(() => stringLength('abcdefghijkl')).toThrow("String length must be between 1 and 10 characters.");
  // You can add more test cases for other invalid lengths
});


