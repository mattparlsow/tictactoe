import { Button, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GridSquare from "./GridSquare";

function GameGrid(props) {
  //router navigator
  let navigate = useNavigate();

  const navToMenu = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="game-grid">
      <div
        className="overlay"
        style={{ visibility: props.gameOver ? "visible" : "hidden" }}
      >
        <Typography variant="h3">
          {props.winner ? props.winner : "Draw!"}
        </Typography>
        <Button variant="contained" disableElevation onClick={props.resetGame}>
          Play Again
        </Button>
        <Button variant="contained" disableElevation onClick={navToMenu}>
          Menu
        </Button>
      </div>
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
