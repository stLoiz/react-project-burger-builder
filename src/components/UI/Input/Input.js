import React from 'react';

import classes from './Input.module.css';

const input = ({
  changed,
  elementConfig,
  elementType,
  invalid,
  label,
  shouldValidate,
  touched,
  value,
  // errorMessage,
}) => {
  let inputElement = null;

  const inputClasses = [classes.Input];
  // let validationError = null;
  if (invalid && shouldValidate && touched) {
    // validationError = <p className={classes.ValidationError}>{errorMessage}</p>;
    inputClasses.push(classes.Invalid);
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          onChange={changed}
          value={value}
        />
      );

      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...elementConfig}
          onChange={changed}
          value={value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
          >
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          onChange={changed}
          value={value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
      {/* {validationError} */}
    </div>
  );
};

export default input;
