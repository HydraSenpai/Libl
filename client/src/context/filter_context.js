import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import { useBookContext } from './book_context';

import {
  LOAD_BOOKS,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
  CLEAR_FILTERS,
} from '../actions/filter_actions';

const initialState = {
  filteredBooks: [],
  allBooks: [],
  sort: 'name-a',
  filters: {
    name: '',
    author: 'all',
    genre: 'all',
    audience: 'all',
    language: 'all',
  },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const { books } = useBookContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_BOOKS, payload: books });
  }, [books]);

  useEffect(() => {
    dispatch({ type: SORT_BOOKS });
  }, [books, state.sort]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext, initialState };
