/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 *
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples
 * of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
 *
 * Memory
 * 12/06/2020
 */

var fizzBuzz = function (n) {
  let returnArr = [];

  for (let i = 0; i < n; i++) {
    returnArr[i] = `${i + 1}`;
  }

  for (let i = 2; i < n; i += 3) {
    returnArr[i] = 'Fizz';
  }

  for (let i = 4; i < n; i += 5) {
    returnArr[i] = 'Buzz';
  }

  for (let i = 14; i < n; i += 15) {
    returnArr[i] = 'FizzBuzz';
  }

  return returnArr;
};

// reason why I took this approach (and didn't use % - mod)
// https://leetcode.com/problems/fizz-buzz/discuss/149627/C%2B%2B-0ms-Solution-beats-100.00-without-if-else