import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Quiz from './Quiz';
import Continue from './Continue';
import Footer from './Footer';
import './App.css';
import './bootstrap.min.css';

const AuthorQuiz = props => {
  return (
    <div className='container-fluid'>
      <Header />
      <Quiz {...props} />
      <Continue
        show={props.answer === 'correct'}
        onContinue={props.onContinue}
      />
      <p>
        <Link to='/add'>Add an author</Link>
      </p>
      <Footer />
    </div>
  );
};

export default AuthorQuiz;
