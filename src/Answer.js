import React from 'react';
import './App.css';
import './bootstrap.min.css';

const Answer = props => {
  return (
    <div
      className='answer'
      onClick={() => {
        props.onAnswer(props.title);
      }}
    >
      <h4>{props.title}</h4>
    </div>
  );
};

export default Answer;
