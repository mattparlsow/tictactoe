import React from "react";
import GameOutcomeDialog from "./GameOutcome";
import GridSquare from "./GridSquare";
import { styled } from "@mui/material/styles";

const GameGridContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.custom.backgroundColor,
  background: theme.custom.backgroundGradient,
  aspectRatio: "1 / 1",
  padding: 10,
  borderRadius: 5,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignContent: "space-around",
  position: "relative",
  overflow: "hidden",
}));

function GameGrid(props) {
  return (
    <GameGridContainer>
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
    </GameGridContainer>
  );
}

export default GameGrid;
