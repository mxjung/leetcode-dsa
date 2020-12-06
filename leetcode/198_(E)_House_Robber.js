/**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Topics: Dynamic Programming
 *
 * 12/06/2020
 */

var rob = function (nums) {
  if (nums.length == 0) return 0;

  let prev1 = 0;
  let prev2 = 0;
  for (let num of nums) {
    let tmp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = tmp;
    console.log('num: ', num, ' prev1: ', prev1, ' prev2: ', prev2)
  }
  return prev1;
};

// explanation:
// https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.

// Also consider easier solution
// https://leetcode.com/problems/house-robber/discuss/55693/C-1ms-O(1)space-very-simple-solution
var rob = (nums) => {
  let a = 0;
  let b = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      a = Math.max(a + num[i], b);
    }
    else {
      b = Math.max(a, b + num[i]);
    }
  }

  return Math.max(a, b);
}