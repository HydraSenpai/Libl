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
  CLEAR_ALERT,
  SHOW_CUSTOM_ALERT,
  UPDATE_RESERVE_BEGIN,
  UPDATE_RESERVE_SUCCESS,
  UPDATE_RESERVE_ERROR,
  PROCESS_BEGIN,
  GET_RESERVATIONS_SUCCESS,
  GET_RESERVATIONS_ERROR,
} from '../actions/user_actions';
import { initialState } from '../context/user_context';

const user_reducer = (state, action) => {
  if (action.type === PROCESS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      alertText: 'Register Successful. Redirecting...',
      displayAlert: true,
      alertType: 'success',
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      displayAlert: true,
      alertText: action.payload.msg,
      alertType: 'error',
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      alertText: 'Login Successful. Redirecting...',
      displayAlert: true,
      alertType: 'success',
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
      displayAlert: true,
      alertType: 'error',
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      isLoading: false,
      alertText: 'Account updated successfully!',
      displayAlert: true,
      alertType: 'success',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
      displayAlert: true,
      alertType: 'error',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      alertText: '',
      alertType: '',
      displayAlert: false,
    };
  }
  if (action.type === SHOW_CUSTOM_ALERT) {
    return {
      ...state,
      alertText: action.payload.message,
      alertType: action.payload.type,
      displayAlert: true,
    };
  }
  if (action.type === UPDATE_RESERVE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_RESERVE_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      isLoading: false,
      alertText: 'Reserved Book!',
      displayAlert: true,
      alertType: 'success',
    };
  }
  if (action.type === UPDATE_RESERVE_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
      displayAlert: true,
      alertType: 'error',
    };
  }
  if (action.type === GET_RESERVATIONS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      reservations: action.payload,
    };
  }
  if (action.type === GET_RESERVATIONS_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
