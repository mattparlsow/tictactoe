import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { SINGLE_PLAYER, TWO_PLAYER } from "../config";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  let navigate = useNavigate();

  const setGameMode = (gameMode) => {
    navigate(`/setup`, { state: { gameMode: gameMode } });
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography variant="h1">Tic Tac Toe</Typography>
      <Button
        className="btn"
        variant="contained"
        disableElevation
        onClick={() => setGameMode(SINGLE_PLAYER)}
      >
        Single Player
      </Button>
      <Button
        className="btn"
        variant="contained"
        disableElevation
        onClick={() => setGameMode(TWO_PLAYER)}
      >
        2 Player
      </Button>
    </Stack>
  );
}

export default SplashScreen;
