import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Router from './config/routes/index';
import {store, persistor} from './config/redux/store';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
