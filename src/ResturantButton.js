import React from "react";

function ResturantButton(props) {
  return (
    <div>
      <button onClick={props.handler} className="btn btn-success">
        Add
      </button>
      <button onClick={props.handler2} className="btn btn-danger">
        Remove
      </button>
    </div>
  );
}

export default ResturantButton;
