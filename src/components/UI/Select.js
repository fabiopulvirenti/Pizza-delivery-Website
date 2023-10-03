import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <select ref={ref} onChange={props.onChange} {...props.input}>
        {props.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
});

export default Input;
