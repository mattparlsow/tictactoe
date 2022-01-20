import React from "react";

function GridSquare(props) {
  return (
    <div variant="text" onClick={props.updateSquare} className="square">
      {props.value ? props.value : ""}
    </div>
  );
}

export default GridSquare;
