/**

Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.

11/10/2020
 */

function hasPathWithGivenSum(t, s) {
  if (t === null) {
    if (s === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    let left;
    let right;
    console.log(t.left === null);
    if (t.left !== null) {
      left = hasPathWithGivenSum(t.left, s - t.value);
    }
    if (t.right !== null) {
      right = hasPathWithGivenSum(t.left, s - t.value);
    }

    return left || right;
  }
}
