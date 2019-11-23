const { fibonacci, factorial } = require('./recursion');

test("Test Fibonacci function", () => {
  expect(fibonacci(2)).toEqual(1);
  expect(fibonacci(6)).toEqual(8);
  expect(fibonacci(20)).toEqual(6765);
  expect(fibonacci(-1)).toEqual(1);
});

test("Test Factorial function", () => {
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(4)).toEqual(24);
});