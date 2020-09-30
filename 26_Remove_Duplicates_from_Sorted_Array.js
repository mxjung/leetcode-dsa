/**
 * Remove duplicates from sorted array
 * 08/20/20
 */

var removeDuplicates = function(nums) {
  let i = 0;

  if (nums.length <= 1) {
      return nums.length;
  }

  for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j];
      }
  }
  console.log(nums);
  return i + 1;
};
