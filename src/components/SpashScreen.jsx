import { Grid, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SINGLE_PLAYER, TWO_PLAYER } from "../constants";
import { useNavigate } from "react-router-dom";

function SplashScreen(props) {
  let navigate = useNavigate();
  const [gameMode, setGameMode] = useState(null);

  useEffect(() => {
    navigate(`/play/${gameMode}`);
  }, [gameMode, navigate]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <div className="splash-screen-container">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="h1">Tic Tac Toe</Typography>
          <Button
            className="btn"
            variant="contained"
            disableElevation
            onClick={() => {
              setGameMode(SINGLE_PLAYER);
            }}
          >
            Single Player
          </Button>
          <Button
            className="btn"
            variant="contained"
            disableElevation
            onClick={() => {
              setGameMode(TWO_PLAYER);
            }}
          >
            2 Player
          </Button>
        </Stack>
      </div>
    </Grid>
  );
}

export default SplashScreen;
