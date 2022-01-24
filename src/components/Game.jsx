import React, { useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import {
  DRAW,
  MAX_MOVE_COUNT,
  NUMBER_OF_SQUARES,
  SINGLE_PLAYER,
  TWO_PLAYER,
  WIN,
  WINNING_SEQUENCES,
} from "../config";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import GameHistory from "./GameHistory";
import computerAi from "../scripts/computerAi";

function Game() {
  const { state } = useLocation();
  const playerState = state.players;
  const gameMode = state.gameMode;

  const [gameCount, setGameCount] = useState(1);
  const [players, setPlayers] = useState(playerState);
  const [nextPlayer, setNextPlayer] = useState("x");
  const [gameMoves, setGameMoves] = useState([[...Array(NUMBER_OF_SQUARES)]]);
  const [result, setResult] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);

  const checkGameOutcome = (grid, finishGame) => {
    for (let i = 0; i < WINNING_SEQUENCES.length; i++) {
      const [a, b, c] = WINNING_SEQUENCES[i];
      if (grid[a] === grid[b] && grid[a] === grid[c] && grid[a] != null) {
        if (finishGame) {
          //Get the winners name different object declaration depending on gameMode
          let winnerName =
            players[grid[a]] ||
            (players.player === grid[a] && "You") ||
            (players.pc === grid[a] && "A.I");

          //Update state with the outcome of the game
          setResult({ winner: winnerName, outcome: WIN });
          setGameHistory((prev) => [
            ...prev,
            {
              game: gameCount,
              winner: winnerName,
              outcome: WIN,
              gameMoves: gameMoves.slice(1), //slice the array to remove the default move #0
            },
          ]);
        }
        return true;
      }
    }
    if (gameMoves.length - 1 >= MAX_MOVE_COUNT) {
      if (finishGame) {
        //Update state with the outcome of the game if its a draw
        setResult({ winner: null, outcome: DRAW });
        setGameHistory((prev) => [
          ...prev,
          {
            game: gameCount,
            winner: null,
            outcome: DRAW,
            gameMoves: gameMoves.slice(1), //slice the array to remove the default move #0
          },
        ]);
      }
      return true;
    }
    return false;
  };

  const handleAiMove = (grid) => {
    //Copy the array as we don't want to mutate it
    var gridCopy = [...grid];
    let aiMove = computerAi(gridCopy);
    gridCopy[aiMove] = players.pc;

    //return the array with the ai's move placed
    return gridCopy;
  };

  const updateSquare = (i) => {
    //Spread the last move array from the state
    var currentGrid = [...gameMoves[gameMoves.length - 1]];

    if (gameMode === SINGLE_PLAYER) {
      if (currentGrid[i] == null) {
        currentGrid[i] = players.player;

        //Pass in false param so the game doesn't end at this point if there is a winner
        let outcome = checkGameOutcome(currentGrid, false);

        if (outcome === false && gameMoves.length < MAX_MOVE_COUNT) {
          //If there is no outcome it's the ai's turn
          let aiMove = handleAiMove(currentGrid);

          //Update state with the new moves in seperate array's
          setGameMoves([...gameMoves, currentGrid, aiMove]);
        } else {
          //If the outcome was true, update state with last move
          setGameMoves([...gameMoves, currentGrid]);
        }
      }
    } else if (gameMode === TWO_PLAYER) {
      if (!result) {
        if (currentGrid[i] == null) {
          //Place the players move if the sqaure is free
          currentGrid[i] = nextPlayer;
          setGameMoves([...gameMoves, currentGrid]);
          setNextPlayer(nextPlayer === "x" ? "o" : "x");
        }
      }
    }
  };

  useEffect(() => {
    if (gameMoves) {
      //Pass in true as if we find a winner at this point end the game
      checkGameOutcome(gameMoves[gameMoves.length - 1], true);
    }
  }, [gameMoves]);

  const resetGame = () => {
    setGameMoves([[...Array(NUMBER_OF_SQUARES)]]);
    setNextPlayer("x");
    setResult(false);
    setGameCount((gameCount) => (gameCount += 1));
  };

  return (
    <>
      {players && (
        <Box
          sx={(theme) => ({
            width: "35%",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
              width: "50%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "90%",
            },
          })}
        >
          {gameMode === TWO_PLAYER && (
            <>
              <Typography
                component="h1"
                variant="h5"
              >{`${players.x} VS ${players.o}`}</Typography>
              <Typography variant="subtitle2">X Plays first</Typography>
            </>
          )}
          {gameMode === SINGLE_PLAYER && (
            <>
              <Typography component="h1" variant="h5">
                You VS A.I
              </Typography>
              <Typography variant="subtitle2">You Play first</Typography>
            </>
          )}
          <GameGrid
            grid={gameMoves[gameMoves.length - 1]}
            updateSquare={updateSquare}
            result={result}
            resetGame={resetGame}
          />
          <GameHistory gameHistory={gameHistory} />
        </Box>
      )}
    </>
  );
}

export default Game;
