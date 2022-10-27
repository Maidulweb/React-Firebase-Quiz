import React from 'react';
import classes from '../styles/InputText.module.css';

const InputText = ({icon, ...props}) => {
    return (
      <div className={classes.textInput}>
        <input {...props} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    );
};

export default InputText;