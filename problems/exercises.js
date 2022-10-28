// Question 1
function stripPunctuation(string) {
    let res = string.match(/[a-z0-9]+/ig).join('')
    return res;
}

stripPunctuation('abc+def+ghi!!!'); // 'abcdefghi'
stripPunctuation('+1 919-644-9821'); // '19196449821'
stripPunctuation("Don't play with me!"); // 'Dontplaywithme'

// Question 2
function rotateArray(array) {
    if (!(array instanceof Array)) {
        return;
    }
    if (array.length === 0) {
        return [];
    }
    const newArr = Array.from(array);
    let first = newArr.shift();
    newArr.push(first);
    return newArr;
}

// Question 3
function letterCaseCounts(string) {
    let lowercase = string.match(/[a-z]/g)
    let uppercase = string.match(/[A-Z]/g)

    const obj = {
        lowercase: lowercase ? lowercase.length: 0,
        uppercase: uppercase ? uppercase.length: 0,
    }
    obj.neither = string.length - obj.lowercase - obj.uppercase;

    return obj;
}

letterCaseCounts('abCdef 123');


// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
