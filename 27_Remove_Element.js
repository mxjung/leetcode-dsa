/**
 * Remove value from array
 * 08/20/20
 */

var removeElement = function(nums, val) {
  let pointer1 = 0;

  for (let i=0; i<nums.length; i++) {
      if (nums[i] !== val) {
          nums[pointer1] = nums[i];
          pointer1++;
      }
  }
  return pointer1;
};