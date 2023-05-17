// This function checks if a given column is attacked by any other queen.
// It takes an integer `i` as input, which represents the current row.
// It takes an integer `j` as input, which represents the current column.
// It takes an array `mat` as input, which represents the current state of the chessboard.
// It takes an integer `len` as input, which represents the length of the chessboard.
// It returns a boolean value, indicating whether or not the column is attacked.
const checkDiagonal = (i: number, j: number, mat: string[][], len: number): boolean => {
  // Check the current row and column.
  // If there is a queen in the current row or column, the column is attacked.
  for (let x = 0; x < len; x++) {
    if (mat[i][x] === 'Q' || mat[x][j] === 'Q') {
      return false;
    }
  }

  // Check the diagonals.
  // Iterate over all diagonals, starting from the current row and column.
  // If there is a queen on any of the diagonals, the column is attacked.
  let x = i - 1;
  let y = j - 1;
  while (x >= 0 && x < len && y >= 0 && y < len) {
    if (mat[x][y] === 'Q') {
      return false;
    }
    x = x - 1;
    y = y - 1;
  }

  x = i - 1;
  y = j + 1;
  while (x >= 0 && x < len && y >= 0 && y < len) {
    if (mat[x][y] === 'Q') {
      return false;
    }
    x = x - 1;
    y = y + 1;
  }

  x = i - 1;
  y = j;
  while (x >= 0 && x < len && y >= 0 && y < len) {
    if (mat[x][y] === 'Q') {
      return false;
    }
    x--;
  }

  // The column is not attacked.
  return true;
};

// This function solves the N-Queens problem.
// It takes an integer `n` as input, which represents the number of queens.
// It returns an array of arrays, where each inner array represents a valid arrangement of queens on an `n`x`n` chessboard.
export const solveNQueens = (n: number): string[][] => {
  // Create an empty array to store the results.
  const result: string[][] = [];

  // Create a matrix to represent the chessboard.
  const chessBoard: string[][] = [...new Array(n)].map((_) => new Array(n).fill('.'));

  // Recursively search for all valid arrangements of queens.
  const helper = (row: number, board: string[][]): void => {
    // If we have reached the last row, we have found a valid arrangement.
    if (row === n) {
      // Add the current arrangement to the results.
      result.push([...board].map((r) => r.join('')));
      return;
    }

    // Iterate over all columns in the current row.
    for (let j = 0; j < n; j++) {
      // If the current column is not attacked by any other queen, place a queen on it.
      if (checkDiagonal(row, j, board, n)) {
        board[row][j] = 'Q';

        // Recursively search for all valid arrangements of queens on the next row.
        helper(row + 1, board);

        // Remove the queen from the current column.
        board[row][j] = '.';
      }
    }
  };

  // Recursively search for all valid arrangements of queens.
  helper(0, chessBoard);

  // Return the results.
  return result;
};
