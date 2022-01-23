import { Button, Stack } from "@mui/material";
import React from "react";
import GameOutcomeDialog from "./GameOutcome";
import GridSquare from "./GridSquare";

function GameGrid(props) {
  return (
    <div className="game-grid">
      {props.result && (
        <GameOutcomeDialog result={props.result} resetGame={props.resetGame} />
      )}
      {props.grid.map((square, index) => (
        <GridSquare
          key={index}
          squareIndex={index}
          value={square}
          updateSquare={props.updateSquare}
        />
      ))}
    </div>
  );
}

export default GameGrid;
