import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { Router } from 'react-router-dom';
import history from "./history";
// import { saveState, loadState } from "./localStorage";
import App from './App';

const loggerMiddleware = createLogger();

// const persistedState = loadState();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// store.subscribe(() => {
//   console.log(store.getState().userReducer.user)
//   saveState({
//     user: store.getState().userReducer.user,
//     userToken: store.getState().userReducer.userToken,
//   });
// });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
