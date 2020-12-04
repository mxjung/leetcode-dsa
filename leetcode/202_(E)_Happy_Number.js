/**
 * Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Topics: Memoized
 *
 * 12/04/2020
 */

var isHappy = function (n) {
  let numberSet = new Set();

  while (n !== 1 && !numberSet.has(n)) {
    numberSet.add(n);
    n = multiVal(n);
    console.log(n)
  }
  return n === 1;
};

const multiVal = (num) => {
  let sumVal = 0;

  while (num > 0) {
    sumVal += Math.pow(num % 10, 2);
    num = Math.floor(num / 10);
  }

  return sumVal;
}