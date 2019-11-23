const fibonacci = function(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

};

const factorial = function(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


module.exports = {
  fibonacci,
  factorial
};