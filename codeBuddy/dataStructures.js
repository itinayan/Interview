// level {1/2/3}
//Data Structures Level-2

// 1. Write a function to remove all even numbers from an Array.
const allNumbers = [1, 3, 4, 6, 7, 8];
const oddNumbersOnly = allNumbers.filter((number) => number % 2 !== 0);
document.writeln("Odd Numbers :", oddNumbersOnly);

// 2. Replace all the vowels in a string with uppercase vowels.

const vowelToUppercase = (str) => {
  let providedString = str;
  let convertedString = "";

  for (let i = 0; i < string.length; i++) {
    if (
      providedString[i] === "a" ||
      providedString[i] === "e" ||
      providedString[i] === "i" ||
      providedString[i] === "o" ||
      providedString[i] === "u"
    ) {
      convertedString = convertedString + providedString[i].toUpperCase();
    } else {
      convertedString = convertedString + providedString[i];
    }
  }
  return document.write(
    `<br/>Given String : ${providedString}<br/>Converted Vowel Uppercase String : ${convertedString}`
  );
};

vowelToUppercase(string);

// 3. Write a function to find the maximum number in an array.
const numbers = [1, 3, 4, 6, 7, 8, 2, 5];
const maxNumber = Math.max(...numbers);
document.writeln(
  `<br/>From the Given Numbers : ${numbers}<br/>Max Number is : ${maxNumber}`
);
