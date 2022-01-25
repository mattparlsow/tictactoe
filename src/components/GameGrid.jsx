import React from "react";
import GameOutcomeDialog from "./GameOutcome";
import GridSquare from "./GridSquare";
import { styled } from "@mui/material/styles";

const GameGridContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.custom.backgroundColor,
  background: theme.custom.backgroundGradient,
  borderRadius: 5,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignContent: "space-around",
  overflow: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  width: "98%",
  height: "98%",
  padding: "1%",
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
