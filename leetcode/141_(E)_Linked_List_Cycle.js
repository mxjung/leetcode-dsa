/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Topics: Linked List/ Hare and Turtle/tortoise
 *
 * 12/02/2020
 */

var hasCycle = function (head) {
  // Edge case where it's one node in linked list
  if (head === null || head.next === null) {
    return false;
  }

  while (head !== null) {
    // console.log("old val: ", head.val);

    // If we see a value of 10000000, then we've seen this node before
    if (head.val === 10000000) {
      return true;
    }
    head.val = 10000000;
    // console.log("new val: ", head.val);
    head = head.next;
  }

  return false;
};



// https://leetcode.com/problems/linked-list-cycle/discuss/289913/JavaScript-Solution-(98-faster)

var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let hare = head;
  let tortoise = head;
  while (hare) {
    if (!hare.next) {
      return false;
    } else {
      hare = hare.next.next;
      tortoise = tortoise.next;
    }
    if (tortoise == hare) {
      return true;
    }
  }
  return false;
};