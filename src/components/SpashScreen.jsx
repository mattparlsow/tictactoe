import { Button, Stack, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { SINGLE_PLAYER, TWO_PLAYER } from "../constants";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  let navigate = useNavigate();

  const setGameMode = useCallback(
    (gameMode) => {
      navigate(`/play/${gameMode}`);
    },
    [navigate]
  );

  return (
    <div className="splash-screen-container">
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
    </div>
  );
}

export default SplashScreen;
