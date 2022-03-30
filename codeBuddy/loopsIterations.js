// level {1/2/3}
//LoopsIterations Lvel-2

const calculateSum = (input) => {
  let fibo = [];
  let sum=[];
  if (n <= 0) return 0;

  fibo[0] = 0;
  fibo[1] = 1;

  // Initialize result
  let total = fibo[0] + fibo[1];

  // Add remaining terms
  for (let i = 2; i <= input; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    sum.push(fibo[i]);
    total += fibo[i];
  }

  return {sum, total};
};
calculateSum(8).sum.forEach(element=>console.log(element))
console.log("Sum :",calculateSum(8).total)
