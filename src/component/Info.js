import React from 'react';
import classes from '../styles/Info.module.css';
const Info = () => {
    return (
      <>
        <div className={classes.info}>
          Already have an account? <a href="login.html">Login</a> instead.
        </div>
      </>
    );
};

export default Info;