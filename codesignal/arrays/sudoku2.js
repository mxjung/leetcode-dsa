/**

Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

11/06/2020
 */

function sudoku2(grid) {
  // Check rows
  for (let i = 0; i < 9; i++) {
    let numCount = 0;
    let rowSet = new Set();

    let row = grid[i];

    for (let j = 0; j < 9; j++) {
      // If number (and not '.')
      let num = Number(row[j]);
      if (num) {
        // if number is not within 1 through 9
        if (num > 9 || num < 1) {
          return false;
        }
        numCount++;
        rowSet.add(num);
      }
    }

    // If the number of values is not equal to unique Set,
    // not a valid row
    if (numCount !== rowSet.size) {
      return false;
    }
  }

  // Check columns
  for (let j = 0; j < 9; j++) {
    let numCount = 0;
    let colSet = new Set();

    let row = grid.map(row => row[j]);

    for (let i = 0; i < 9; i++) {
      // If number (and not '.')
      let num = Number(row[i]);
      if (num) {
        // if number is not within 1 through 9
        if (num > 9 || num < 1) {
          return false;
        }
        numCount++;
        colSet.add(num);
      }
    }

    // If the number of values is not equal to unique Set,
    // not a valid col
    if (numCount !== colSet.size) {
      return false;
    }
  }

  // Check 3x3 matrices
  for (let i = 0; i < 9; i = i + 3) {
    for (let j = 0; j < 9; j = j + 3) {
      // make the matrix
      let mat = [];
      let numCount = 0;
      let matSet = new Set();

      for (let row = i; row < i + 3; row++) {
        let subRow = [];
        for (let col = j; col < j + 3; col++) {
          // If number (and not '.')
          let num = Number(grid[row][col]);
          if (num) {
            // if number is not within 1 through 9
            if (num > 9 || num < 1) {
              return false;
            }
            numCount++;
            matSet.add(num);
          }
          subRow.push(num);
        }
        mat.push(subRow);
      }

      // If the number of values is not equal to unique Set,
      // not a valid col
      if (numCount !== matSet.size) {
        return false;
      }
    }
  }

  // Passes all checks
  return true;
}