import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from '../reducers/user_reducer';

const initialState = {};

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext, initialState };
