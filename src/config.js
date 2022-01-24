const SINGLE_PLAYER = 0;
const TWO_PLAYER = 1;
const NUMBER_OF_SQUARES = 9;
const MAX_MOVE_COUNT = 9;
const WINNING_SEQUENCES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const DRAW = 0;
const WIN = 1;

export {
  SINGLE_PLAYER,
  TWO_PLAYER,
  NUMBER_OF_SQUARES,
  MAX_MOVE_COUNT,
  WINNING_SEQUENCES,
  WIN,
  DRAW,
};
