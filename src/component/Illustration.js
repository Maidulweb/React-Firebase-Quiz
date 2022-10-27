import React from 'react';
import classes from '../styles/Illustration.module.css';
import IllustrationImage from '../assets/images/signup.svg';
const Illustration = () => {
    return (
        <div className={classes.illustration}>
          <img src={IllustrationImage} alt="Signup" />
        </div>
    );
};

export default Illustration;