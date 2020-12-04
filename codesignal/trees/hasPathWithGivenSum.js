/**

Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.

11/10/2020
 */

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
  if (t === null) {
    return false;
  } else if (t.left === null && t.right === null) {
    if (s - t.value === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    let left = hasPathWithGivenSum(t.left, s - t.value);
    let right = hasPathWithGivenSum(t.right, s - t.value);

    return left || right;
  }
}
