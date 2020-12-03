/**
Write a program to find the node at which the intersection of two singly linked lists begins.

Topic: Two pointers
 *
 * 12/03/2020
 */

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    if (pointerA === null) {
      pointerA = headB;
    } else {
      pointerA = pointerA.next;
    }

    if (pointerB === null) {
      pointerB = headA;
    } else {
      pointerB = pointerB.next;
    }
  }

  // will be node value or null (depending on when pointerA === pointerB)
  return pointerA;
};

// https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/49785/Java-solution-without-knowing-the-difference-in-len!