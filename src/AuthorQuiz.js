import React from 'react';
import Header from './Header';
import Quiz from './Quiz'
import Continue from './Continue'
import Footer from './Footer'
import './App.css';
import './bootstrap.min.css';

const AuthorQuiz = props => {
  return (
    <div className='container-fluid'>
      <Header />
      <Quiz {...props} />
      <Continue />
      <Footer />
    </div>
  );
};

export default AuthorQuiz;
