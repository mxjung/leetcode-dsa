/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degree
 * (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix
 * directly. DO NOT allocate another 2D matrix and do the rotation.
 *
 * Array
 * 10/29/2020
 *
 * Revised 11/06/2020
 */

var rotate = function (matrix) {
  let matLength = matrix.length;

  // Transpose Matrix
  for (let i = 0; i < matLength; i++) {
    for (let j = i; j < matLength; j++) {
      let temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < matLength; i++) {
    for (let j = 0; j < matLength / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matLength - j - 1];
      matrix[i][matLength - j - 1] = temp;
    }
  }

  return matrix;
};