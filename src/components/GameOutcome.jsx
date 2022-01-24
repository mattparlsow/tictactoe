import { Button, Stack, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const GameOutcomeContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#0000009e",
  width: "100%",
  height: "100%",
  top: 0,
  display: "flex",
  color: "#fff",
  justifyContent: "center",
  h3: {
    fontWeight: 600,
    wordBreak: "break-word",
    textAlign: "center",
  },
}));

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
    <GameOutcomeContainer
      style={{
        visibility: props.result || props.result ? "visible" : "hidden",
      }}
    >
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Typography component="h2" variant="h3">
          {buildDialogMessage()}
        </Typography>
        <Button variant="contained" disableElevation onClick={props.resetGame}>
          Play Again
        </Button>
        <Button variant="contained" disableElevation onClick={navToMenu}>
          Menu
        </Button>
      </Stack>
    </GameOutcomeContainer>
  );
}

export default GameOutcomeDialog;
