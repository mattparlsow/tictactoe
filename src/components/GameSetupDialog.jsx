import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TWO_PLAYER } from "../constants";

function GameSetupDialog(props) {
  const [playerX, setPlayerX] = useState(null);
  const [playerO, setPlayerO] = useState(null);
  const [playerXError, setPlayerXError] = useState(false);
  const [playerOError, setPlayerOError] = useState(false);

  const handleSubmit = () => {
    setPlayerXError(playerX ? false : true);
    setPlayerOError(playerO ? false : true);

    if (playerO && playerX) {
      props.setupPlayers({ x: playerX, o: playerO });
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="game-setup-overlay">
        <div className="game-setup-dialog">
          {props.gameMode == TWO_PLAYER ? (
            <div className="two-player">
              <Stack spacing={2}>
                <Typography variant="h2">Player Names</Typography>
                <TextField
                  required
                  error={playerXError}
                  id="outlined-basic"
                  label="Player X"
                  variant="outlined"
                  onChange={(e) => setPlayerX(e.target.value)}
                />
                <TextField
                  required
                  error={playerOError}
                  id="outlined-basic"
                  label="Player O"
                  variant="outlined"
                  onChange={(e) => setPlayerO(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Play!
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to menu
                </Button>
              </Stack>
            </div>
          ) : (
            <div className="one-player">
              <Typography variant="h2">Select your token</Typography>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Button>X</Button>
                <Button>O</Button>
              </Stack>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GameSetupDialog;
