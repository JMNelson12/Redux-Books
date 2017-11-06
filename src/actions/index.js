export function selectBook(book) {
  // return an action
  return {
    // an action must always have a type and payload
    type: 'BOOK_SELECTED',
    payload: book
  };
}