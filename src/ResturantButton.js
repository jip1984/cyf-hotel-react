import React from "react";

function ResturantButton(props) {
  return (
    <button onClick={props.handler} className="btn btn-primary">
      Add
    </button>
  );
}

export default ResturantButton;
