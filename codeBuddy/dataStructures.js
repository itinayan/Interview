// level {1/2/3}
//Data Structures Level-2


// 1. Write a function to remove all even numbers from an Array.
const allNumbers = [1, 3, 4, 6, 7, 8];
const oddNumbersOnly = allNumbers.filter(number => number%2!==0);
console.log("Odd Numbers :",oddNumbersOnly);

// 2. Replace all the vowels in a string with uppercase vowels.

let string="Elie";
 
    const conVowUpp=(str)=> {
        // Stores the length
        // of str
        let providedString = str;
 
        providedString.forEach(element => {
            if (
                element === "a" ||
                element === "e" ||
                element === "i" ||
                element === "o" ||
                element === "u"
              ) {
                document.write(str[i].toUpperCase());
              } else {
                document.write(str[i]);
              }
        });
        
      }
 
      // Driver Code
       
     console.log(conVowUpp(string));

      // 3. Write a function to find the maximum number in an array.
 const numbers= [1, 3, 4, 6, 7, 8, 2, 5]
 const maxNumbers=number.length;
 console.log(maxNumbers);

