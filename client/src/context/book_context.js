import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from '../reducers/book_reducer';
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
} from '../actions/book_actions';
import { useUserContext } from '../context/user_context';

const initialState = {
  books: [],
  singleBook: {},
  totalBooks: 0,
  isLoading: true,
};

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { token, user, logoutUser } = useUserContext();

  const authFetch = axios.create({
    baseURL: '/api/v1',
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    let url = `/books`;
    dispatch({ type: GET_BOOKS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { books, numOfBooks } = data;
      dispatch({ type: GET_BOOKS_SUCCESS, payload: { books, numOfBooks } });
      console.log(data);
    } catch (error) {
      dispatch({ type: GET_BOOKS_ERROR });
      console.log(error);
      logoutUser();
    }
  };

  const getSingleBook = async (id) => {
    dispatch({ type: GET_SINGLE_BOOK_BEGIN });
    let url = `/books/${id}`;
    try {
      const { data } = await authFetch.get(url);
      const { book } = data;
      dispatch({ type: GET_SINGLE_BOOK_SUCCESS, payload: { book } });
    } catch (error) {
      dispatch({ type: GET_SINGLE_BOOK_ERROR });
      console.log(error);
    }
  };

  const addUserToBookList = async (bookId, userId) => {
    console.log('trying to update book list');
    let url = `/books/${bookId}`;
    dispatch({ type: UPDATE_WAITINGLIST_BEGIN });
    try {
      const { data } = await authFetch.patch(url, userId);
      dispatch({
        type: UPDATE_WAITINGLIST_SUCCESS,
      });
      getAllBooks();
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_WAITINGLIST_ERROR });
    }
  };

  const getBookReservation = async (bookId) => {
    //this gets the number of reservations a book has and calculates status based on that
    console.log('trying to get number of reservations');
    let url = `/reservations/`;
    dispatch({ type: GET_BOOKS_BEGIN });
    try {
      const { data } = await authFetch.get(url, bookId);
      console.log(data.numOfReservations);
      dispatch({ type: UPDATE_STATUS, payload: data.numOfReservations });
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_WAITINGLIST_ERROR });
    }
  };

  const createReservation = async (bookId) => {
    console.log('trying to create book reservation');
    let url = `/reservations/`;
    dispatch({ type: GET_BOOKS_BEGIN });
    try {
      const { data } = await authFetch.post(url, { userId: user._id, bookId });
      dispatch({
        type: CREATE_RESERVATION_SUCCESS,
      });
      getBookReservation(bookId);
      getSingleBook(bookId);
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_WAITINGLIST_ERROR });
    }
  };

  return (
    <BookContext.Provider
      value={{
        ...state,
        getAllBooks,
        getSingleBook,
        addUserToBookList,
        getBookReservation,
        createReservation,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext, initialState };
