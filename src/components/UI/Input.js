import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.lebal}</label>
      {/* Spread operator to extract content of the props.input object */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
