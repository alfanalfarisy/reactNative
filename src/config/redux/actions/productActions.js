import axios from 'axios';
import {GET_ERRORS_INPUTPRODUCT, GET_ERRORS_SELLPRODUCT} from './types';
import {BASE_URL} from '../../../utils/constanta';
// Register User
export const productInput = (productData, navigation) => (dispatch) =>
  new Promise(function (resolve, reject) {
    axios
      .post(`${BASE_URL}/api/product/input`, productData)
      .then((res) => {
        //   navigation.push('Login');
        if (res.status == 422) {
          dispatch({
            type: GET_ERRORS_INPUTPRODUCT,
            payload: '',
          });
        }
        resolve(true);
      }) // re-direct to login on successful register
      .catch((err) => {
        dispatch({
          type: GET_ERRORS_INPUTPRODUCT,
          payload: err.response.data,
        });
        reject(false);
      });
  });

export const productUpdateBySell = (productData, navigation) => (dispatch) =>
  new Promise(function (resolve, reject) {
    console.log(productData);
    axios
      .post(`${BASE_URL}/api/product/transaction`, productData)
      .then((res) => {
        dispatch({
          type: GET_ERRORS_SELLPRODUCT,
          payload: '',
        });
        resolve(true);
      }) // re-direct to login on successful register
      .catch((err) => {
        reject(false);
        dispatch({
          type: GET_ERRORS_SELLPRODUCT,
          payload: err.response.data,
        });
      });
  });
