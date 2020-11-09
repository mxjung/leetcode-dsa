/**

Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

11/08/2020
 */

function rotateImage(a) {
  let n = a.length;

  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }

  // reverse rows
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = a[i][j];
      a[i][j] = a[i][n - j - 1];
      a[i][n - j - 1] = temp;
    }
  }

  return a;
}