/**
Count the number of prime numbers less than a non-negative number, n.

 *
 * 12/04/2020
 */

var countPrimes = function (n) {
  // edge case
  if (n <= 1) {
    return 0;
  }

  let primes = [];
  let primesCount = 0;

  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      primesCount++;

      // all multiples of this value are not primes
      for (let j = 1; j * i < n; j++) {
        primes[j * i] = true;
      }
    }
  }

  return primesCount;
};

/*
Explanation:

Regardless of what number you come to, if they are non primes, every time you do the:

for (let j = 1; j * i < n; j++) {
  primes[j * i] = true;
}

loop, the previous loops should have accounted for these non primes, therefore you
can loop through the main loop and check every number from 0 to n.

Also: https://leetcode.com/problems/count-primes/discuss/57607/JS-Solution-(since-JS-solutions-are-so-few)
*/