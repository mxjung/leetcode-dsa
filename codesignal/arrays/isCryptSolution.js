/**

A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

11/17/2020
 */

function isCryptSolution(crypt, solution) {
  // Create object to grab letter values
  let letterObj = {};

  for (let arr of solution) {
    letterObj[arr[0]] = arr[1];
  }

  let word1 = '';
  let word2 = '';
  let word3 = '';

  for (let letter of crypt[0]) {
    word1 += letterObj[letter];
  }

  for (let letter of crypt[1]) {
    word2 += letterObj[letter];
  }

  for (let letter of crypt[2]) {
    word3 += letterObj[letter];
  }

  // Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).
  if (word1.length > 1 && word1[0] === '0'
    || word2.length > 1 && word2[0] === '0'
    || word3.length > 1 && word3[0] === '0'
  ) return false;

  return Number(word1) + Number(word2) === Number(word3);
}
