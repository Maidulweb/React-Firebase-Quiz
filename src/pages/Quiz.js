import React from 'react';
import Answers from '../component/Answers';
import MiniPlayer from '../component/MiniPlayer';
import ProgressBar from '../component/ProgressBar';

const Quiz = () => {
    return (
      <>
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answers />
        <ProgressBar />
        <MiniPlayer />
      </>
    );
};

export default Quiz;