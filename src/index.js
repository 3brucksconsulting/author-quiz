import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import AuthorQuiz from './AuthorQuiz';
import AddAuthor from './AddAuthor';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississipi',
      'Roughing It'
    ]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamilet', 'Macbeth', 'Romeo and Juliet']
  }
];

const getQuizData = authors => {
  const allBooks = authors.reduce((p, c, i) => {
    return p.concat(c.books);
  }, []);
  const availableBooks = shuffle(allBooks).slice(0, 4);
  const selectedBook = sample(availableBooks);

  return {
    author: authors.find(author =>
      author.books.some(book => book === selectedBook)
    ),
    answers: availableBooks,
    answer: selectedBook
  };
};

const initialState = {
  quizData: getQuizData(authors),
  answer: 'none'
};

class App extends React.Component {
  constructor() {
    super();

    this.state = initialState;
  }

  evaluateAnswer = answer => {
    const isAnswer = this.state.quizData.author.books.some(
      book => book === answer
    );

    this.setState({ answer: isAnswer ? 'correct' : 'wrong' });
  };

  resetState = () => {
    this.setState(initialState);
    // this.render();
  };

  render() {
    return (
      <AuthorQuiz
        {...this.state}
        onAnswer={this.evaluateAnswer}
        onContinue={this.resetState}
      />
    );
  }
}

const AddAuthorWrapper = withRouter(({ history }) => {
  return (
    <AddAuthor
      onAddAuthor={author => {
        authors.push(author);
        history.push('/');
      }}
    />
  );
});

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' component={App} />
      <Route path='/add' component={AddAuthorWrapper} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
