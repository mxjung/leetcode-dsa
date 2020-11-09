/**

Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

11/08/2020
 */

function removeKFromList(l, k) {

  if (l === null) {
    return l;
  } else if (l.next === null && l.value === k) {
    return l.next;
  }

  let currNode = l;
  let nextNode = currNode.next;

  while (true) {
    // console.log('curr: ', currNode.value, ' next: ', nextNode.value);

    if (currNode.value === k) {
      if (nextNode) {
        // check if nextNode is null
        currNode.value = nextNode.value;
        currNode.next = nextNode.next;
      } else {
        currNode = nextNode;
      }
      console.log('removed : ', l);
    } else {
      currNode = nextNode;
    }

    if (currNode === null) {
      break;
    }

    nextNode = currNode.next;
    // console.log(currNode.value, nextNode.value)
  }

  return l;
}
