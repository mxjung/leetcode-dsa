/**

Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

11/08/2020
 */

function removeKFromList(l, k) {
  let curr;

  // remove leading k values with changing l
  while (l && l.value == k) {
    l = l.next;
  }

  // loop to the end.
  // skip nodes with k values.
  curr = l;
  while (curr && curr.next) {
    if (curr.next.value == k) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return l;
}
