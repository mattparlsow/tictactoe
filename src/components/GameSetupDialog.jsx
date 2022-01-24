import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SINGLE_PLAYER, TWO_PLAYER } from "../config";
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
  //Get the data passed through the route
  const { state } = useLocation();
  const gameMode = state.gameMode;

  let navigate = useNavigate();

  const [players, setPlayers] = useState({ x: null, o: null });
  const [errors, setErrors] = useState({
    playerX: false,
    playerO: false,
  });

  const handleSubmit = () => {
    if (players.x && players.o) {
      navigate(`/play`, { state: { players: players, gameMode: TWO_PLAYER } });
    } else {
      setErrors({
        ...errors,
        playerX: !players.x && true,
        playerO: !players.o && true,
      });
    }
  };

  return (
    <Stack alignItems="center" width="100%">
      <GameSetupContainer>
        {gameMode === TWO_PLAYER ? (
          <Stack spacing={2}>
            <Typography component="h1" variant="h2">
              Player Names
            </Typography>
            <TextField
              label="Player X"
              variant="outlined"
              onChange={(e) => setPlayers({ ...players, x: e.target.value })}
              inputProps={{ maxLength: 12 }}
              error={errors.playerX}
            />
            <TextField
              label="Player O"
              variant="outlined"
              onChange={(e) => setPlayers({ ...players, o: e.target.value })}
              inputProps={{ maxLength: 12 }}
              error={errors.playerO}
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
        ) : (
          <>
            <Typography component="h1" variant="h2">
              Select your token
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              marginTop={"15px"}
            >
              <Button
                sx={{ aspectRatio: "1/1", fontSize: "3.5rem" }}
                onClick={() =>
                  navigate(`/play`, {
                    state: {
                      players: { player: "x", pc: "o" },
                      gameMode: SINGLE_PLAYER,
                    },
                  })
                }
              >
                X
              </Button>
              <Button
                sx={{ aspectRatio: "1/1", fontSize: "3.5rem" }}
                onClick={() =>
                  navigate(`/play`, {
                    state: {
                      players: { player: "o", pc: "x" },
                      gameMode: SINGLE_PLAYER,
                    },
                  })
                }
              >
                O
              </Button>
            </Stack>
          </>
        )}
      </GameSetupContainer>
    </Stack>
  );
}

export default GameSetupDialog;
