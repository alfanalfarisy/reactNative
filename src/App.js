import React from 'react';
import {Provider} from 'react-redux';
import Router from './config/routes/index';
import store from './config/redux/store';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
