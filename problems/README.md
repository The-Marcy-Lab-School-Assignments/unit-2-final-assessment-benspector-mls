# Unit 2 Assessment
## Problem Set

1. **Write a function called `stripPunctuation` that takes a string argument and returns that string with any non-alphanumeric characters removed.**

   ```javascript
   stripPunctuation('abc+def+ghi!!!'); // 'abcdefghi'
   stripPunctuation('+1 919-644-9821'); // '19196449821'
   stripPunctuation("Don't play with me!"); // 'Dontplaywithme'
   ```


2. **Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.**

  * If the input is not an array, return undefined.
  * If the input is an empty array, return an empty array.
  
  Review the test cases below, then implement the solution accordingly.
  ```javascript
  rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
  rotateArray(['a']);                    // ["a"]
  rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
  rotateArray([]);                       // []

  // return `undefined` if the argument is not an array
  rotateArray();                         // undefined
  rotateArray(1);                        // undefined


  // the input array is not mutated
  const array = [1, 2, 3, 4];
  console.log(rotateArray(array));                    // [2, 3, 4, 1]
  console.log(array);                                 // [1, 2, 3, 4]
  ```


3. **Write a function that takes a string, and returns an object containing the following three properties:**

  * The number of characters in the string that are lowercase letters
  * The number of characters that are uppercase letters
  * The number of characters that are neither

  You may assume that the string will always contain at least one character.

  ```javascript
  letterCaseCounts('abCdef 123');
  // { lowercase: 5, uppercase: 1, neither: 4 }

  letterCaseCounts('AbCd +Ef');
  // { lowercase: 3, uppercase: 3, neither: 2 }

  letterCaseCounts('123');
  // { lowercase: 0, uppercase: 0, neither: 3 }
  ```
