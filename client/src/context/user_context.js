import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from '../reducers/user_reducer';
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../actions/user_actions';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token || null,
  isLoading: false,
  alertText: '',
};

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = () => {
    console.log('login');
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const register = async (userData) => {
    //start user register process
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      //send name, email, password data to server
      const response = await axios.post('/api/v1/auth/register', userData);
      //if successful will receive user and token back, which is saved to user state
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user: response.data.user, token: response.data.token },
      });
      //this data is also added to local storage so user can keep access to webpage through site reload
      addUserToLocalStorage({
        user: response.data.user,
        token: response.data.token,
      });
      console.log('user submitted');
    } catch (error) {
      console.log(error);
      //if error save error message to state
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        login,
        register,
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
