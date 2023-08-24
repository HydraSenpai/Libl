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
} from '../actions/book_actions';
import { useUserContext } from '../context/user_context';

const initialState = {
  books: {},
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
      Authorization: `Bearer ${token}`,
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

  return (
    <BookContext.Provider
      value={{
        ...state,
        getAllBooks,
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
