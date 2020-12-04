/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * Personally, I think this is similar to 'how to calculate binary or decimal or
 * any given number scale'.
 *
 *
 * 12/03/2020
 */

var titleToNumber = function (s) {
  let baseAlp = 'A'.charCodeAt(0) - 1;

  let strSum = 0;

  for (let i = 0; i < s.length; i++) {
    strSum += Math.pow(26, s.length - i - 1) * (s[i].charCodeAt(0) - baseAlp);
  }

  return strSum;
};

// AA = 26^0*(26) + 1   = 27
// BA = 26^0*(26*2) + 1 = 53
// ...
// ZY = 26^0*(26*26) + 25 = 701
// AAC = 26^1*(26 + 1) + 3 = 705
// ALM = 26^1*(26+12) + 13 = 1001
// AAAA = 26^2*(26) + 1 =

/*
* Think of it as base 26. For example,
* Column number of "AB" = 1 * 26^1 + 2 * 26^0
*/