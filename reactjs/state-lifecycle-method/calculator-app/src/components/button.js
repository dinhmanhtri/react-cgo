import React from "react";

// Create out Button component as a function component.
const Button = (props) => {
  return (
    <input onClick={props.handleClick} type="button" value={props.label} />
  );
};

export default Button;
