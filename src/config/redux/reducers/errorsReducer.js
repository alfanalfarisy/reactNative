import {
  GET_ERRORS_LOGIN,
  GET_ERRORS_REGISTER,
  GET_ERRORS_INPUTPRODUCT,
  GET_ERRORS_SELLPRODUCT,
} from '../actions/types';
const initialState = {
  register: '',
  login: '',
  inputProduct: '',
  sellProduct: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case GET_ERRORS_REGISTER:
      return {...state, register: action.payload};
    case GET_ERRORS_INPUTPRODUCT:
      return {...state, inputProduct: action.payload};
    case GET_ERRORS_SELLPRODUCT:
      return {...state, sellProduct: action.payload};
    default:
      return state;
  }
}
