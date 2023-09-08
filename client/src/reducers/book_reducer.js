import {
  GET_BOOKS_BEGIN,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_SINGLE_BOOK_BEGIN,
  GET_SINGLE_BOOK_SUCCESS,
  GET_SINGLE_BOOK_ERROR,
  UPDATE_WAITINGLIST_BEGIN,
  UPDATE_WAITINGLIST_SUCCESS,
  UPDATE_WAITINGLIST_ERROR,
} from '../actions/book_actions';

const book_reducer = (state, action) => {
  if (action.type === GET_BOOKS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_BOOKS_SUCCESS) {
    return {
      ...state,
      books: action.payload.books,
      totalBooks: action.payload.numOfBooks,
      isLoading: false,
    };
  }
  if (action.type === GET_BOOKS_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === GET_SINGLE_BOOK_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_SINGLE_BOOK_SUCCESS) {
    return {
      ...state,
      singleBook: action.payload.book,
      isLoading: false,
    };
  }
  if (action.type === GET_SINGLE_BOOK_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === UPDATE_WAITINGLIST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_WAITINGLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === UPDATE_WAITINGLIST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default book_reducer;
