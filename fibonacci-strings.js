function solve(n){
  // You will be given a number and your task is to return the nth fibonacci string.
  // f0 = '0', f1 = '01'
  // f2 = '010' = f1 + f0, f3 = '01001' = f2 + f1
  
  if (n === 0) return "0"; if (n === 1) return "01";

  let f0 = "0"; let f1 = "01";
  let fibonacci = "";

  for (let i = 2; i <= n; i++) {
    fibonacci = f1 + f0;
    f0 = f1;
    f1 = fibonacci;
  }
  return fibonacci;
}