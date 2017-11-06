// Render List of Books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);