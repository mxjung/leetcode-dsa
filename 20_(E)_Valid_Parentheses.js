/**

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

10/04/2020
 */

var isValid = function(s) {
  let pairObj = {')': '(', ']':'[', '}':'{'};
  // In this case, a stack would work because we want to make sure that
  // when we see a closed bracket, everything inside that bracket should
  // have been satisfied already (meaning all brackets pairs closed, or
  // there are no brackets inside the recently closed bracket)
  let bracketStack = [];
  // convert string to array
  s = s.split('');

  for (let bracket of s) {
      if (! ( bracket in pairObj) ) {
          // We have a open bracket
          // Add the open bracket to the stack
          bracketStack.push(bracket);
      } else {
          // The case where we find a closing bracket
          // The top most stack should have the corresponding closing bracket
          if (pairObj[bracket] !== bracketStack.pop()) {
              return false;
          }
      }
  }

  // We want the call stack to be length 0, because that would mean all
  // of our brackets closed
  return bracketStack.length === 0;
};


// Another solution done by user, using switch case
// https://leetcode.com/problems/valid-parentheses/discuss/469626/JavaScript-48-ms-faster-than-96.58
var isValid = function(s) {
  const stack = [];

  for (let i = 0 ; i < s.length ; i++) {
      let c = s.charAt(i);
      switch(c) {
          case '(': stack.push(')');
              break;
          case '[': stack.push(']');
              break;
          case '{': stack.push('}');
              break;
          default:
              if (c !== stack.pop()) {
                  return false;
              }
      }
  }

  return stack.length === 0;
};