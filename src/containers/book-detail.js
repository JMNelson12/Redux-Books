import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div> Select a book to get started. </div>
    }
    return (
      <div>
        <h1>{ this.props.book.title } </h1>
        <div>Pages: {this.props.book.pages} </div>
        <div>
          <div>Author: {this.props.book.author.name} </div>
          <img src={this.props.book.author.image} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);