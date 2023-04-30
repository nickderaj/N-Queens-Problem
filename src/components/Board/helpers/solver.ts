const checkDiagonal = (i: number, j: number, mat: string[][], len: number): boolean => {
  let x = i - 1;
  let y = j - 1;

  while (x >= 0 && x < len && y >= 0 && y < len) {
    if (mat[x][y] === 'Q') return false;
    x = x - 1;
    y = y - 1;
  }

  x = i - 1;
  y = j + 1;

  while (x >= 0 && x < len && y >= 0 && y < len) {
    if (mat[x][y] === 'Q') return false;
    x = x - 1;
    y = y + 1;
  }

  x = i - 1;
  y = j;

  while (x >= 0 && x < len && y >= 0 && y < len) {
    if (mat[x][y] === 'Q') return false;
    x--;
  }

  return true;
};

export const solveNQueens = (n: number): string[][] => {
  const chessBoard: string[][] = [...new Array(n)].map((_) => new Array(n).fill('.'));
  const result: string[][] = [];

  const helper = (row: number, board: string[][]): void => {
    if (row === n) {
      result.push([...board].map((r) => r.join('')));
      return;
    }
    for (let j = 0; j < n; j++) {
      if (checkDiagonal(row, j, board, n)) {
        board[row][j] = 'Q';
        helper(row + 1, board);
        board[row][j] = '.';
      }
    }
  };

  helper(0, chessBoard);

  return result;
};
