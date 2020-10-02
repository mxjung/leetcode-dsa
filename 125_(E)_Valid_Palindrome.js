/**
 * @param {string} s
 * @return {boolean}
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

  Note: For the purpose of this problem, we define empty string as valid palindrome.

  09/30/20

  Regex
 */

const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}