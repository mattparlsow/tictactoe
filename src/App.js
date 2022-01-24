import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";

let theme = createTheme({
  custom: {
    backgroundColour: "rgb(251, 72, 71)",
    backgroundGradient: `linear-gradient(
        90deg,
        rgba(251, 72, 71, 1) 0%,
        rgba(253, 124, 65, 1) 100%
      )`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          width: "145px",
          backgroundColor: "rgb(251, 72, 71)",
          background: `linear-gradient(
              90deg,
              rgba(251, 72, 71, 1) 0%,
              rgba(253, 124, 65, 1) 100%
            )`,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          <Router />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
