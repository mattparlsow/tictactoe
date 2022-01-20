import React, { useCallback, useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import {
  MAX_MOVE_COUNT,
  NUMBER_OF_SQUARES,
  WINNING_SEQUENCES,
} from "./../constants";

function GameView() {
  const [playerToken, setPlayerToken] = useState("X");
  const [grid, setGrid] = useState([...Array(NUMBER_OF_SQUARES)]);
  const [history, setHistory] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [winner, setWinner] = useState("Player 1");
  const [gameOver, setGameOver] = useState(false);

  const updateSquare = (i) => {
    //Update gameboard with players move
    if (moveCount < MAX_MOVE_COUNT) {
      let newGrid = [...grid];
      newGrid[i] = playerToken;

      setGrid(newGrid);
      setHistory([...history, newGrid]);
      setPlayerToken(playerToken == "X" ? "O" : "X");
      setMoveCount(moveCount + 1);
    }
  };

  useEffect(() => {
    calculateWinner(grid);
  }, [grid, history]);

  const calculateWinner = (squares) => {
    for (let i = 0; i < WINNING_SEQUENCES.length; i++) {
      const [a, b, c] = WINNING_SEQUENCES[i];
      if (
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] != null
      ) {
        setGameOver(true);
        setWinner("Player " + playerToken);
        break;
      }
    }
  };

  const resetGame = useCallback(() => {
    setGrid([...Array(NUMBER_OF_SQUARES)]);
    setHistory([]);
    setPlayerToken("X");
    setMoveCount(0);
    setWinner(false);
    setGameOver(false);
  });

  return (
    <>
      <GameGrid
        grid={grid}
        updateSquare={updateSquare}
        gameOver={gameOver}
        winner={winner}
        resetGame={resetGame}
      />
    </>
  );
}

export default GameView;
