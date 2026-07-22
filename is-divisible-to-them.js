function isDivisible(n, x, y) {
  // Check if a number n is divisible by two numbers x and y.
  // All inputs are positive, non-zero numbers.
  const bigNumber = x*y;
  return n % bigNumber === 0;
}