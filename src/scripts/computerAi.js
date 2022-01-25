import { NUMBER_OF_SQUARES } from "../config";

export default function computerAi(grid) {
  let square = false;
  let i = 0;

  let randomMove = Math.floor(Math.random() * (NUMBER_OF_SQUARES - 1) + 1);

  if (grid[randomMove] == null) {
    return randomMove;
  }

  while (i < grid.length) {
    if (grid[4] == null) {
      square = 4;
      break;
    }
    if (grid[1] == null) {
      square = 1;
      break;
    }
    if (grid[3] == null) {
      square = 3;
      break;
    }
    if (grid[5] == null) {
      square = 5;
      break;
    }
    if (grid[7] == null) {
      square = 7;
      break;
    }
    if (grid[2] == null) {
      square = 2;
      break;
    }
    if (grid[6] == null) {
      square = 6;
      break;
    }
    if (grid[8] == null) {
      square = 8;
      break;
    }
    i++;
  }
  return square;
}
