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
    title: '',
    author: '',
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
    dispatch({ type: FILTER_BOOKS });
    dispatch({ type: SORT_BOOKS });
  }, [books, state.sort, state.filters]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'genre' || name === 'audience' || name === 'language') {
      value = e.target.textContent;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const updateFilterFromHomeSearch = (value) => {
    let name = 'title';
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        clearFilters,
        updateFilterFromHomeSearch,
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
