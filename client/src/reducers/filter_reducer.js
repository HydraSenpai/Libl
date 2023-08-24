import {
  LOAD_BOOKS,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
  CLEAR_FILTERS,
} from '../actions/filter_actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_BOOKS) {
    // we use spread operator here to make sure allBooks and filteredBooks become a new copy of books
    return {
      ...state,
      allBooks: [...action.payload],
      filteredBooks: [...action.payload],
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_BOOKS) {
    const { sort, filteredBooks } = state;
    let tempBooks = [...filteredBooks];
    if (sort === 'name-a') {
      tempBooks = tempBooks.sort((a, b) => {
        return a.book_title.localeCompare(b.book_title);
      });
    }
    if (sort === 'name-z') {
      tempBooks = tempBooks.sort((a, b) => {
        return b.book_title.localeCompare(a.book_title);
      });
    }
    return { ...state, filteredBooks: tempBooks };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
