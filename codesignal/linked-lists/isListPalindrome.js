/**

Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

11/24/2020
 */

function isListPalindrome(l) {
  let nodeVals = [];

  while (l) {
    nodeVals.push(l.value);
    l = l.next;
  }

  for (let i = 0; i < nodeVals.length / 2; i++) {
    if (nodeVals[i] !== nodeVals[nodeVals.length - 1 - i]) {
      return false;
    }
  }

  return true;
}