// Question 1
function stripPunctuation(string) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (alpha.includes(currentChar.toLowerCase()) || numbers.includes(currentChar)) {
            newStr += currentChar;
        }
    }
    return newStr;
}

/* 
Regex Approach

function stripPunctuation(string) {
    // Use regex to get an array of all characters (using the g flag)
    // that match the character set [a-zA-Z0-9] and then join
    // them back into a string.

    let result = string.match(/[a-zA-Z0-9]+/g).join('')
    return result;
}
*/


// Question 2
function rotateArray(array) {
    // first check for bad inputs:
    
    // the instanceof method allows us to test if an array is an Array
    if (!(array instanceof Array)) {
        return;
    }
    // if the array is empty return 0
    if (array.length === 0) {
        return [];
    }

    // then copy the array using slice
    const newArr = array.slice();

    // remove the first value using shift and save it
    const first = newArr.shift();

    // add it to the end
    newArr.push(first);

    // return the new array
    return newArr;
}

// Question 3
function letterCaseCounts(string) {
    const obj = {
        lowercase: 0,
        uppercase: 0,
        neither: 0
    }
    
    // use regex to extract only the lowercase characters into an array
    const lowercase = string.match(/[a-z]/g);
    
    // use regex to extract only the lowercase characters into an array
    const uppercase = string.match(/[A-Z]/g);
    
    // if match() returned an array, its length is the number of lowercase characters
    if (lowercase !== null) {
        obj.lowercase = lowercase.length;
    }
    
    // same thing but for uppercase characters
    if (uppercase !== null) {
        obj.uppercase = uppercase.length;
    }
 
    // neither should be the remaining characters
    obj.neither = string.length - obj.lowercase - obj.uppercase;

    return obj;
}


// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
