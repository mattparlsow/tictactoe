import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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

  return (
    <>
      <div className="game-setup-overlay">
        <div className="game-setup-dialog">
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
                handleSubmit();
              }}
            >
              Back to menu
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default GameSetupDialog;
