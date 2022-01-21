import { Button, Stack, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function GameOutcomeDialog(props) {
  let navigate = useNavigate();

  const navToMenu = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const buildDialogMessage = () => {
    let winner = props.result.winner;
    let outcome = props.result.outcome;
    return (winner ? winner : "") + (outcome ? " Wins!" : "Draw!");
  };
  return (
    <div
      className="overlay"
      style={{
        visibility: props.result || props.result ? "visible" : "hidden",
      }}
    >
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Typography variant="h3">{buildDialogMessage()}</Typography>
        <Button variant="contained" disableElevation onClick={props.resetGame}>
          Play Again
        </Button>
        <Button variant="contained" disableElevation onClick={navToMenu}>
          Menu
        </Button>
      </Stack>
    </div>
  );
}

export default GameOutcomeDialog;
