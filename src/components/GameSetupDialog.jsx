import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TWO_PLAYER } from "../config";
import { styled } from "@mui/material/styles";

const GameSetupContainer = styled("div")(({ theme }) => ({
  width: "70%",
  backgroundColor: "#efefef",
  padding: "30px",
  maxWidth: "500px",
  borderRadius: "5px",
  textAlign: "center",
}));

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
    <Stack alignItems="center" width="100%">
      <GameSetupContainer>
        {props.gameMode === TWO_PLAYER ? (
          <div className="two-player">
            <Stack spacing={2}>
              <Typography component="h1" variant="h2">
                Player Names
              </Typography>
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
                sx={{ alignSelf: "center" }}
              >
                Play!
              </Button>
              <Button
                variant="contained"
                disableElevation
                onClick={() => {
                  navigate("/");
                }}
                sx={{ alignSelf: "center" }}
              >
                Back to menu
              </Button>
            </Stack>
          </div>
        ) : (
          <div className="one-player">
            <Typography component="h1" variant="h2">
              Select your token
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button>X</Button>
              <Button>O</Button>
            </Stack>
          </div>
        )}
      </GameSetupContainer>
    </Stack>
  );
}

export default GameSetupDialog;
