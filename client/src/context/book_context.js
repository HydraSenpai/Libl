import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from '../reducers/book_reducer';

const initialState = {};

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
