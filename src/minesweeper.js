/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let row = 0; row < rows; row += 1) {
    result[row] = [];

    for (let column = 0; column < columns; column += 1) {
      let mines = 0;

      for (let dRow = -1; dRow <= 1; dRow += 1) {
        for (let dColumn = -1; dColumn <= 1; dColumn += 1) {
          if (dRow === 0 && dColumn === 0) {
            continue;
          }

          const nextRow = row + dRow;
          const nextColumn = column + dColumn;

          if (
            nextRow >= 0 &&
            nextRow < rows &&
            nextColumn >= 0 &&
            nextColumn < columns &&
            matrix[nextRow][nextColumn]
          ) {
            mines += 1;
          }
        }
      }

      result[row][column] = mines;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
