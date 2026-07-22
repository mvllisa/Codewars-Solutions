function sumOfNumsAndSums(n) {
  // S(N) — sum of all positive numbers not more than N
  // S(N) = 1 + 2 + 3 + ... + N
  
  // Z(N) — sum of all S(i), where 1 <= i <= N
  // Z(N) = S(1) + S(2) + S(3) + ... + S(N)
  
  // Return the value of S(Z(N)).
  
  n = BigInt(n);

  let z = 0n; let s = 0n; let result = 0n;
  for (let i = 1n; i <= n; i++) {
    s += i;
    z += s;
  }
  
  for (let j = 1n; j <= z; j++) result += j;

  return result;
}