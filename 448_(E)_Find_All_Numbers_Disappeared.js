/**

  Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

  Find all the elements of [1, n] inclusive that do not appear in this array.

  Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

  10/01/2020

 */

 // Brute Force Method
 var findDisappearedNumbers = function(nums) {
  let numFreq = {};
  let returnArr = [];

  for (let num of nums) {
      if (!(num in numFreq)) {
          numFreq[num] = 1;
      }
  }

  for (let i=1; i<=nums.length; i++) {
      if (!(i in numFreq)) {
          returnArr.push(i);
      }
  }

  console.log(numFreq);
  return returnArr;
};

// O(N) solution
// Involves keeping track of index, and finding out which number in that index is not negative
var findDisappearedNumbers = function(nums) {
  var actual,
      i,
      res = [];

  for(i = 0; i < nums.length; i++){
      actual = Math.abs(nums[i]) - 1;
      if(nums[actual] > 0)
          nums[actual] *= -1;
  }

  for(i = 0; i < nums.length; i++){
      if(nums[i] > 0)
          res.push(i+1);
  }

  return res;
};