import React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/material/styles";

const StyledButton = styled(ButtonUnstyled)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "5rem",
  borderRadius: "5px",
  backgroundColor: "#fff",
  width: "30%",
  height: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
  color: "#141414",
  border: "none",
  "&:hover": {
    backgroundColor: "#ededed",
    cursor: "pointer",
  },
}));

function GridSquare(props) {
  return (
    <StyledButton onClick={() => props.updateSquare(props.squareIndex)}>
      {props.value ? props.value : ""}
    </StyledButton>
  );
}

export default GridSquare;
