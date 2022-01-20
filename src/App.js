import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";

let theme = createTheme();
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
