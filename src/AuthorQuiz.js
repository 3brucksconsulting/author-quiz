import React from 'react';
import './App.css';
import './bootstrap.min.css';

const AuthorQuiz = props => {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn {...props.turnData} />
      <Continue />
      <Footer />
    </div>
  );
};

const Hero = () => {
  return (
    <div className='row'>
      <div className='jumbotron col-10 offset-1'>
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};

const Turn = props => {
  return (
    <div className='row turn' style={{ backgroundColor: 'white' }}>
      <div className='col-4 offset-1'>
        <img className='authorimage' src={props.author.imageUrl} alt='Author' />
      </div>
      <div className='col-6'>
        {props.books.map((title) => <p key={title}>{title}</p>)}
        </div>
    </div>
  );
};

const Continue = () => {
  return <div />;
};

const Footer = () => {
  return (
    <div id='footer' className='row'>
      <div className='col-12'>
        <p className='text-muted credit'>
          All images are from{' '}
          <a href='http://commons.wikimedia.org/wiki/Main_Page'>
            Wikimedia Commons
          </a>{' '}
          and are in the public domain
        </p>
      </div>
    </div>
  );
};

export default AuthorQuiz;
