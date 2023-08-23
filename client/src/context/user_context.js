import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import reducer from '../reducers/user_reducer';
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
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

  const authFetch = axios.create({
    baseURL: '/api/v1',
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const registerUser = async (userData) => {
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

  const loginUser = async (userData) => {
    //start user login process
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      //send email, password data to server to check user exists in database
      const response = await axios.post('/api/v1/auth/login', userData);
      //if user exists then user and token is returned by server
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user: response.data.user, token: response.data.token },
      });
      //this data is also added to local storage so user can keep access to webpage through site reload
      addUserToLocalStorage({
        user: response.data.user,
        token: response.data.token,
      });
    } catch (error) {
      console.log(error);
      //if error save error message to state
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const logoutUser = async () => {
    removeUserFromLocalStorage();
    dispatch({ type: LOGOUT_USER });
    console.log(' logged out user');
  };

  const editUser = async (userData) => {
    console.log(userData);
    //start user update process
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const response = await authFetch.patch('/auth/update', userData);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user: response.data.user },
      });
      addUserToLocalStorage({
        user: response.data.user,
        token: state.token,
      });
      console.log('success');
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
        logoutUser,
        editUser,
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
