import React from 'react';
import './App.css';
import './bootstrap.min.css';
import './AddAuthor.css';

const AddAuthor = ({ match, onAddAuthor }) => {
  return (
    <div className='AddAuthor'>
      <h1>Add Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
  );
};

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imageUrl: '',
      book: '',
      books: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onAddAuthor(this.state);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddBook(event) {
    this.setState({
      books: this.state.books.concat([this.state.book]),
      book: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='AddAuthor__input'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>
        <div className='AddAuthor__input'>
          <label htmlFor='imageUrl'>Image URL</label>
          <input
            type='text'
            name='imageUrl'
            value={this.state.imageUrl}
            onChange={this.onFieldChange}
          />
        </div>

        <div className='AddAuthor__input'>
          <label htmlFor='book'>Books</label>
          {this.state.books.map(book => (
            <p key={book}>{book}</p>
          ))}
          <input
            type='text'
            name='book'
            value={this.state.book}
            onChange={this.onFieldChange}
          />
          <input type='button' value='+' onClick={this.handleAddBook} />
        </div>

        <input type='submit' value='Add' />
      </form>
    );
  }
}

export default AddAuthor;
