import React from "react";
import GameOutcomeDialog from "./GameOutcome";
import GridSquare from "./GridSquare";

function GameGrid(props) {
  return (
    <div className="game-grid">
      <GameOutcomeDialog result={props.result} resetGame={props.resetGame} />
      {props.grid.map((square, index) => (
        <GridSquare
          key={index}
          value={square}
          updateSquare={() => {
            props.updateSquare(index);
          }}
        />
      ))}
    </div>
  );
}

export default GameGrid;
