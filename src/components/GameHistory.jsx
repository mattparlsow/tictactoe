import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { WIN } from "../config";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GameGrid from "./GameGrid";
import { Box } from "@mui/system";

function GameHistory(props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleDrawer = (visibility) => (event) => {
    //Don't close the side panel on keydown, tab, shift
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setPanelOpen(visibility);
  };

  return (
    <>
      {props.gameHistory.length > 0 && (
        <>
          <Button
            onClick={toggleDrawer(true)}
            variant="text"
            sx={{
              marginTop: "10px",
              background: "none",
              width: "100%",
              color: "#1976d2",
            }}
          >
            View Pervious Games
          </Button>
          <SwipeableDrawer
            anchor="right"
            open={panelOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box margin="10px">
              {props.gameHistory.map((game) => (
                <Accordion
                  expanded={expanded === `panel${game.game}`}
                  onChange={handleAccordionChange(`panel${game.game}`)}
                  key={`game${game.game}`}
                  sx={{ width: "300px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${game.game}content`}
                    id={`panel${game.game}`}
                  >
                    <Typography variant="subtitle2">
                      {`Game #${game.game} - ${
                        game.outcome === WIN ? `${game.winner} Won` : "Draw"
                      }`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {game.gameMoves.map((grid, index) => (
                      <Stack
                        marginBottom="20px"
                        key={`game${game.game}move${index}`}
                      >
                        <Typography variant="subtitle2">
                          Move #{index + 1}
                        </Typography>
                        <Box width="100%" paddingTop="100%" position="relative">
                          <GameGrid grid={grid} updateSquare={() => null} />
                        </Box>
                      </Stack>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </SwipeableDrawer>
        </>
      )}
    </>
  );
}

export default GameHistory;
