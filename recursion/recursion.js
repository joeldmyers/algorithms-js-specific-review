const fibonacci = function(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const optimizedFibonacci = function(n) {

  if (n <= 2) {
    return 1;
  }

  let amountPrior = 0;
  let aggregator = 1;
  let step = 1;

  while (step < n) {
    const temp = aggregator;
    aggregator = aggregator + amountPrior;
    amountPrior = temp;
    step++;
  }
  return aggregator;
}

const factorial = function(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


module.exports = {
  fibonacci,
  factorial,
  optimizedFibonacci
};