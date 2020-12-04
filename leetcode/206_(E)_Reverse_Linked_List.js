/**
 * Reverse a singly linked list.
 *
 * Linked List
 * 10/04/2020
 */

var reverseList = function(head) {
  // Iterative
  let prev = null;
  let curr = head;

  while (curr !== null) {
      let nextTemp = curr.next; // 2
      curr.next = prev;         // 1 next is null
      prev = curr;              // prev = 1
      curr = nextTemp;          // curr = 2
  }

  return prev;
};

// For recursive, once you get to the bottom, then you want to start
// creating the linkedList
var reverseList = function(head) {
  // Recursive
  if (head === null || head.next === null) {
      return head;
  }

  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};