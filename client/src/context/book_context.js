import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from '../reducers/book_reducer';

const initialState = {};

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const authFetch = axios.create({
  //   baseURL: '/api/v1',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const getAllBooks = async () => {
    let url = `/api/v1/books`;
    try {
      const { data } = await axios.get(url);
      console.log(data);
    } catch (error) {}
  };

  return (
    <BookContext.Provider
      value={{
        ...state,
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
