import React from 'react';
import Answer from './Answer';
import './App.css';
import './bootstrap.min.css';

const Quiz = props => {
  const answerToBackgroundColor = answer => {
    const mapping = {
      none: '',
      correct: 'green',
      wrong: 'red'
    };

    return mapping[answer];
  };

  return (
    <div
      className='row turn'
      style={{ backgroundColor: answerToBackgroundColor(props.answer) }}
    >
      <div className='col-4 offset-1'>
        <img
          src={props.quizData.author.imageUrl}
          className='authorimage'
          alt='Author'
        />
      </div>
      <div className='col-6'>
        {props.quizData.answers.map(title => (
          <Answer key={title} title={title} onAnswer={props.onAnswer} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
