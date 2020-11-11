/**

Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.

11/10/2020
 */

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  if (!t) { // Sanity check
    return true;
  }

  // Check if tree s & t are mirroring each other
  function isMirror(s, t) {
    if (!s && !t) {
      return true; // Both nodes are null, ok
    }
    if (!s || !t || s.value !== t.value) {
      return false; // Found a mismatch
    }
    // Compare the left subtree of `s` with the right subtree of `t`
    // and the right subtree of `s` with the left subtree of `t`
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }

  return isMirror(t.left, t.right);
}
