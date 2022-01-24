export default function computerAi(grid) {
  let square = false;
  let i = 0;

  while (i < grid.length) {
    if (grid[4] == null) {
      square = 4;
    }
    if (grid[1] == null) {
      square = 1;
    }
    if (grid[3] == null) {
      square = 3;
    }
    if (grid[5] == null) {
      square = 5;
    }
    if (grid[7] == null) {
      square = 7;
    }
    if (grid[2] == null) {
      square = 2;
    }
    if (grid[6] == null) {
      square = 6;
    }
    if (grid[8] == null) {
      square = 8;
    }
    i++;
  }
  return square;
}
