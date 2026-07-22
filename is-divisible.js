function isDivisible(n, x, y) {
  // Check if a number n is divisible by two numbers x and y.
  // All inputs are positive, non-zero numbers.
  return n % x === 0 && n % y === 0;
}