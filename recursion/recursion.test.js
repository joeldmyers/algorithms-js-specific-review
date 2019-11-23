const { fibonacci, factorial, optimizedFibonacci } = require('./recursion');

test("Test Fibonacci function", () => {
  expect(fibonacci(2)).toEqual(1);
  expect(fibonacci(6)).toEqual(8);
  expect(fibonacci(20)).toEqual(6765);
  expect(fibonacci(-1)).toEqual(1);
  expect(fibonacci(41)).toEqual(165580141);
  // expect(fibonacci(80)).toEqual(23416728348467685); // TOO SLOW HERE
});

test("Test Optimized Fibonacci function", () => {
  expect(optimizedFibonacci(2)).toEqual(1);
  expect(optimizedFibonacci(3)).toEqual(2);
  expect(optimizedFibonacci(6)).toEqual(8);
  expect(optimizedFibonacci(20)).toEqual(6765);
  expect(optimizedFibonacci(-1)).toEqual(1);
  expect(optimizedFibonacci(41)).toEqual(165580141);
  expect(optimizedFibonacci(80)).toEqual(23416728348467685);
});

test("Test Factorial function", () => {
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(4)).toEqual(24);
});