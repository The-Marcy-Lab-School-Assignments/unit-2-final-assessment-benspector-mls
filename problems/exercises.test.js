const exercises = require('./exercises');

// Question 1 
test('Question 1: strip punctuation', () => {
  expect(exercises.stripPunctuation('abc+def+ghi!!!')).toBe('abcdefghi');
  expect(exercises.stripPunctuation('+1 919-644-9821')).toBe('19196449821');
  expect(exercises.stripPunctuation("Don't play with me!")).toBe('Dontplaywithme');
});

// Question 2
test('Question 2: rotate array', () => {
  expect(exercises.rotateArray([7, 3, 5, 2, 9, 1])).toEqual([3, 5, 2, 9, 1, 7]);
  expect(exercises.rotateArray(['a', 'b', 'c'])).toEqual(["b", "c", "a"]);
  expect(exercises.rotateArray(['a'])).toEqual(['a']);
  expect(exercises.rotateArray([])).toEqual([]);
  expect(exercises.rotateArray()).toBeUndefined();
  expect(exercises.rotateArray(1)).toBeUndefined();
});

// Question 2
test('Question 2 (again): input array should NOT be mutated', () => {
  const array = [1, 2, 3, 4];
  exercises.rotateArray(array);
  expect(array).toEqual([1, 2, 3, 4]);
});

// Question 3
test('Question 3: letter case counts', () => {
  expect(exercises.letterCaseCounts('abCdef 123')).toEqual({ lowercase: 5, uppercase: 1, neither: 4 });
  expect(exercises.letterCaseCounts('AbCd +Ef')).toEqual({ lowercase: 3, uppercase: 3, neither: 2 });
  expect(exercises.letterCaseCounts('123')).toEqual({ lowercase: 0, uppercase: 0, neither: 3 });
});
