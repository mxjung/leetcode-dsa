/**
 * Given an array of size n, find the majority element. The majority
 * element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority
 * element always exist in the array.
 *
 * 10/05/2020
 */

var majorityElement = function (nums) {
  let fregObj = {};
  let maxFreq = 0;
  let majority = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in fregObj) {
      fregObj[nums[i]] = fregObj[nums[i]] + 1;
      if (fregObj[nums[i]] + 1 > maxFreq) {
        maxFreq = fregObj[nums[i]] + 1;
        majority = nums[i];
      }
    } else {
      fregObj[nums[i]] = 1;
    }
  }

  return majority;
};