/**
 * Given a non-empty array of integers nums, every element appears
 * twice except for one. Find that single one.
 *
 * Follow up: Could you implement a solution with a linear
 * runtime complexity and without using extra memory?
 *
 * 10/05/2020
 */

var singleNumber = function(nums) {
  let obj = {};

  for (let i=0; i<nums.length; i++) {
      if (nums[i] in obj) {
          obj[nums[i]] = obj[nums[i]] + 1;
      } else {
          obj[nums[i]] = 1;
      }
  }

  for (let key in obj) {
      if (obj[key] === 1) {
          return key;
      }
  }
};