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
  UPDATE_STATUS,
  CREATE_RESERVATION_SUCCESS,
  GET_RESERVATION_ERROR,
  CREATE_RESERVATION_ERROR,
  CLEAR_ALERT,
} from '../actions/book_actions';

const book_reducer = (state, action) => {
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      alertText: '',
      alertType: '',
      displayAlert: false,
    };
  }
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
  if (action.type === UPDATE_STATUS) {
    console.log(action.payload);
    const updatedSingleBook = { ...state.singleBook };
    if (action.payload && action.payload > 0) {
      updatedSingleBook.status = 'waiting';
    } else {
      updatedSingleBook.status = 'available';
    }
    return {
      ...state,
      singleBook: updatedSingleBook,
    };
  }
  if (action.type === CREATE_RESERVATION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertText: 'Success!',
      alertType: 'success',
      displayAlert: true,
    };
  }
  if (action.type === CREATE_RESERVATION_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: 'Error',
      alertType: 'error',
      displayAlert: true,
    };
  }
  if (action.type === GET_RESERVATION_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default book_reducer;
