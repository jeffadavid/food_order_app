import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.lebal}</label>
      {/* Spread operator to extract content of the props.input object */}
      {/* ref parameter used as a forwardRef to pass the DOM values to MealForm as a child component */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
