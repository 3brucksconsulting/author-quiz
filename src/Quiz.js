import React from 'react';
import Book from './Book';
import './App.css';
import './bootstrap.min.css';

const Quiz = props => {
  const highlightToBackgroundColor = highlight => {
    const mapping = {
      none: '',
      correct: 'green',
      wrong: 'red'
    };

    return mapping[highlight];
  };

  return (
    <div
      className='row turn'
      style={{ backgroundColor: highlightToBackgroundColor(props.highlight) }}
    >
      <div className='col-4 offset-1'>
        <img
          src={props.quizData.author.imageUrl}
          className='authorimage'
          alt='Author'
        />
      </div>
      <div className='col-6'>
        {props.quizData.books.map(title => (
          <Book key={title} title={title} onClick={props.onAnswerSelected} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
