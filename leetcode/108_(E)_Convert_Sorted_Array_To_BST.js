/**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Topics: Tree, Binary Sort Tree (BST)
 *
 * 11/28/2020
 */

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  } else if (nums.length === 1) {
    return new TreeNode(nums[0], null, null);
  } else {
    let middleIdx = Math.ceil(nums.length / 2) - 1;
    let middleVal = nums.slice(middleIdx, middleIdx + 1)

    let left = nums.slice(0, middleIdx);
    let right = nums.slice(middleIdx + 1);

    let node = new TreeNode(middleVal, sortedArrayToBST(left), sortedArrayToBST(right));
    return node;
  }
};