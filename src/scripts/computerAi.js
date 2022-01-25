import { NUMBER_OF_SQUARES } from "../config";

export default function computerAi(grid) {
  let square = false;

  let randomMove = Math.floor(Math.random() * (NUMBER_OF_SQUARES - 1) + 1);

  //If the random sqaure is avalible place ai move there
  if (grid[randomMove] == null) {
    return randomMove;
  }

  //Find the next free square to place ai move
  for (var i = 0; i < grid.length; i++) {
    if (grid[i] == null) {
      square = i;
      break;
    }
  }

  return square;
}
