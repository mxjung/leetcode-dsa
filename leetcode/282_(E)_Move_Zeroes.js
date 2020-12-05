/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * 12/05/2020
 */

var moveZeroes = function (nums) {
  let count1 = 0;
  let count2 = 1;

  while (count2 < nums.length) {
    if (nums[count1] === 0 && nums[count2] !== 0) {
      // replace 0 with number
      nums[count1] = nums[count2];
      nums[count2] = 0;
      count1++
      count2++;
    } else if (nums[count1] === 0 && nums[count2] === 0) {
      // then only increase count2 because we want to maintain
      // the last index (count1) where we need to replace in place
      // the next number !== 0
      count2++;
    } else {
      count1++
      count2++;
    }
  }

  return nums;
};