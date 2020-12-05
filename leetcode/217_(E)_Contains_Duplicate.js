/**
 * Given an array of integers, find if the array contains any duplicates.
 *
 * Your function should return true if any value appears at least twice in the array, and it should
 * return false if every element is distinct.
 *
 * Set, duplicates
 * 12/04/2020
 */

var containsDuplicate = function (nums) {
  let numSet = new Set();

  for (let val of nums) {
    if (numSet.has(val)) {
      return true;
    }
    numSet.add(val);
  }

  return false;
};