/**
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

 *
 * 11/29/2020
 */

var generate = function (numRows) {
  let pasRows = [];

  while (numRows > 0) {
    if (pasRows.length === 0) {
      // edge case with empty array
      pasRows.push([1]);
    } else {
      pasRows.push(addRow(pasRows[pasRows.length - 1]));
    }
    numRows--;
  }

  return pasRows;
};

var addRow = function (arr) {
  let addedArr = [1];

  for (let i = 0; i < arr.length - 1; i++) {
    addedArr.push(arr[i] + arr[i + 1]);
  }

  // Push trailing 1
  addedArr.push(1);

  return addedArr;
}