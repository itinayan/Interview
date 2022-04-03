// level {1/2/3}
//LoopsIterations Lvel-2

const fibonancciSries = (input) => {
  let firstNum = 0,
    secondNum = 1,
    total = 1,
    nextNum;
  document.writeln("Fibonance Sries :");
  document.writeln(`${secondNum},`);
  for (let i = 2; i <= input; i++) {
    nextNum = firstNum + secondNum;
    document.writeln(`${nextNum},`);
    total = total + firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
  }
  document.write(`<br />`);
  document.write(`Total: ${total}`);
};
fibonancciSries(6);

