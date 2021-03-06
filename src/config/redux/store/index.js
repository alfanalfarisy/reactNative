// import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from '../reducers/rootReducer';

// // const store = createStore(rootReducer,applyMiddleware(thunk));

// const initialState = {};
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(thunk)),
// );
// export default store;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from '../reducers/rootReducer';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  // whitelist: ['dataReducer'],
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
let persistor = persistStore(store);
export {store, persistor};
