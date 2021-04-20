import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import chartReducer from './chartReducer';
import productReducer from './productReducer';

export default combineReducers({
  auth: authReducer,
  err: errorsReducer,
  chart: chartReducer,
  product: productReducer,
});
