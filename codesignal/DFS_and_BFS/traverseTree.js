/**

Given a binary tree of integers t, return its node values in the following format:

The first element should be the value of the tree root;
The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
Etc.

11/25/2020
 */

function traverseTree(t) {
  let stackQueue = [];
  let treeVals = [];

  // Checking for null
  if (t) stackQueue.push(t);

  while (stackQueue.length > 0) {
    let targetNode = stackQueue.shift();
    treeVals.push(targetNode.value)
    if (targetNode.left !== null) stackQueue.push(targetNode.left);
    if (targetNode.right !== null) stackQueue.push(targetNode.right);
  }

  return treeVals;
}