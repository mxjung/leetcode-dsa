/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * 12/03/2020
 */

var maxSubArray = function (nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // console.log("nums[i-1]: ", nums[i-1], "nums[i]: ", nums[i])
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  // console.log(nums);
  return Math.max(...nums);
};

/*

Also note:
https://leetcode.com/problems/maximum-subarray/discuss/164670/JavaScript-Solution-Comparisons

Explanation:

Ex Input: [-2,1,-3,4,-1,2,1,-5,4]
Ex Answer: 6 -> [4,-1,2,1]

By the time you get to 4,
nums[i - 1] = -2. (4 > 2) so nums[i] = 4
then:
nums[i-1] = 4, nums[i] = -1, (-1 > 3) so nums[i] = 3
nums[i-1] = 3, nums[i] = 2, (2 < 5) so nums[i] = 5
nums[i-1] = 5, nums[i] = 1, (1 < 6) so nums[i] = 6
nums[i-1] = 6, nums[i] = -5, (-5 < 1) so nums[i] = 1
nums[i-1] = 1, nums[i] = 4, (4 < 5) so nums[i] = 5


nums = [-2, 1, -2, 4, 3, 5, 6, 1, 5]

The only time you ever stop adding and start counting again is if
you get to a value that is greater than all the values that you've added up
to this point. Because you're saying that up to that point, the largest
subarray was nums[i - 1]
*/