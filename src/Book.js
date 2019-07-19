import React from 'react';
import './App.css';
import './bootstrap.min.css';

const Book = props => {
  return (
    <div className='answer' onClick={props.onClick}>
      <h4>{props.title}</h4>
    </div>
  );
};

export default Book;
