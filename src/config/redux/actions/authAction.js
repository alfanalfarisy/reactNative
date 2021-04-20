import axios from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
  GET_ERRORS_LOGIN,
  GET_ERRORS_REGISTER,
  SET_CURRENT_USER,
  USER_LOADING,
} from './types';
import {BASE_URL} from '../../../utils/constanta';
// Register User
export const registerUser = (userData, navigation) => (dispatch) => {
  axios
    .post(`${BASE_URL}/api/users/register`, userData)
    .then((res) => {
      navigation.push('Login');
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS_REGISTER,
        payload: err.response.data,
      }),
    );
};
// Login - get user token
export const loginUser = (email, password, navigation) => (dispatch) => {
  const userData = {
    email,
    password,
  };
  dispatch(setUserLoading(true));
  axios
    .post(`${BASE_URL}/api/users/login`, userData)
    .then((res) => {
      console.log(res);
      // Save to localStorage
      // Set token to localStorage
      const {token} = res.data;
      // AsyncStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(setUserLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setUserLoading(false));
      dispatch({
        type: GET_ERRORS_LOGIN,
        payload: err.response.data,
      });
      // navigation.push('Registration');
    });
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// User loading
export const setUserLoading = (action) => {
  return {
    type: USER_LOADING,
    payload: action,
  };
};
// Log user out
export const logoutUser = (history) => (dispatch) => {
  // Remove token from local storage
  // AsyncStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
