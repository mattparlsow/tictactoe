import React, { useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import {
  DRAW,
  MAX_MOVE_COUNT,
  NUMBER_OF_SQUARES,
  TWO_PLAYER,
  WIN,
  WINNING_SEQUENCES,
} from "../constants";
import GameSetupDialog from "./GameSetupDialog";
import { useLocation } from "react-router-dom";

function Game() {
  const { state } = useLocation();

  const [playerToken, setPlayerToken] = useState("x");
  const [history, setHistory] = useState([[...Array(NUMBER_OF_SQUARES)]]);
  const [result, setResult] = useState(false);
  const [players, setPlayers] = useState(null);
  const gameMode = state.gameMode;

  const checkGameOutcome = (grid) => {
    for (let i = 0; i < WINNING_SEQUENCES.length; i++) {
      const [a, b, c] = WINNING_SEQUENCES[i];
      if (grid[a] === grid[b] && grid[a] === grid[c] && grid[a] != null) {
        setResult({ winner: players[grid[a]], outcome: WIN });
        break;
      }
    }
    if (history.length - 1 >= MAX_MOVE_COUNT) {
      return setResult({ winner: null, outcome: DRAW });
    }
  };

  const updateSquare = (i) => {
    var cuurentGameState = [...history[history.length - 1]];
    if (cuurentGameState[i] == null) {
      cuurentGameState[i] = playerToken;
      setHistory([...history, cuurentGameState]);
      setPlayerToken(playerToken === "x" ? "o" : "x");
    }
  };

  useEffect(() => {
    //Greater than 1 to skip default "first" empty array
    if (history.length > 1) {
      checkGameOutcome(history[history.length - 1]);
    }
  }, [history]);

  const resetGame = () => {
    setHistory([[...Array(NUMBER_OF_SQUARES)]]);
    setPlayerToken("x");
    setResult(false);
  };

  const setupPlayers = (players) => {
    setPlayers(players);
  };

  return (
    <>
      {gameMode === TWO_PLAYER && !players && (
        <GameSetupDialog setupPlayers={setupPlayers} />
      )}
      {players && (
        <>
          <div className="game-wrapper">
            <h2>{players.x + " VS " + players.o}</h2>
            <GameGrid
              grid={history[history.length - 1]}
              updateSquare={updateSquare}
              result={result}
              resetGame={resetGame}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Game;
