import React from 'react';
import Video from './Video';
import classes from '../styles/Videos.module.css';

const Videos = () => {
    return (
      <div>
        <div className={classes.videos}>
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    );
};

export default Videos;