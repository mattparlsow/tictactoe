import React, { useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import {
  DRAW,
  MAX_MOVE_COUNT,
  NUMBER_OF_SQUARES,
  WIN,
  WINNING_SEQUENCES,
} from "../constants";
import GameSetupDialog from "./GameSetupDialog";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import GameHistory from "./GameHistory";

function Game() {
  const { state } = useLocation();

  const gameMode = state.gameMode;

  const [gameCount, setGameCount] = useState(1);
  const [players, setPlayers] = useState(null);
  const [nextPlayer, setNextPlayer] = useState("x");
  const [gameMoves, setGameMoves] = useState([[...Array(NUMBER_OF_SQUARES)]]);
  const [result, setResult] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);

  const checkGameOutcome = (grid) => {
    for (let i = 0; i < WINNING_SEQUENCES.length; i++) {
      const [a, b, c] = WINNING_SEQUENCES[i];
      if (grid[a] === grid[b] && grid[a] === grid[c] && grid[a] != null) {
        setResult({ winner: players[grid[a]], outcome: WIN });
        setGameHistory((prev) => [
          ...prev,
          {
            game: gameCount,
            winner: players[grid[a]],
            outcome: WIN,
            gameMoves: gameMoves,
          },
        ]);
        break;
      }
    }
    if (gameMoves.length - 1 >= MAX_MOVE_COUNT) {
      setResult({ winner: null, outcome: DRAW });
      setGameHistory((prev) => [
        ...prev,
        { game: gameCount, winner: null, outcome: DRAW, gameMoves: gameMoves },
      ]);
      return;
    }
  };

  const updateSquare = (i) => {
    if (!result) {
      var currentGrid = [...gameMoves[gameMoves.length - 1]];
      if (currentGrid[i] == null) {
        currentGrid[i] = nextPlayer;
        setGameMoves([...gameMoves, currentGrid]);
        setNextPlayer(nextPlayer === "x" ? "o" : "x");
      }
    }
  };

  useEffect(() => {
    if (gameMoves) {
      checkGameOutcome(gameMoves[gameMoves.length - 1]);
    }
  }, [gameMoves]);

  const resetGame = () => {
    setGameMoves([[...Array(NUMBER_OF_SQUARES)]]);
    setNextPlayer("x");
    setResult(false);
    setGameCount((gameCount) => (gameCount += 1));
  };

  const setupPlayers = (players) => {
    setPlayers(players);
  };

  return (
    <>
      {!players && (
        <GameSetupDialog setupPlayers={setupPlayers} gameMode={gameMode} />
      )}
      {players && (
        <>
          <div className="game-wrapper">
            <Typography variant="h5">
              {players.x + " VS " + players.o}
            </Typography>
            <GameGrid
              grid={gameMoves[gameMoves.length - 1]}
              updateSquare={updateSquare}
              result={result}
              resetGame={resetGame}
            />
            <GameHistory gameHistory={gameHistory} />
          </div>
        </>
      )}
    </>
  );
}

export default Game;
