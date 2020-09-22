import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
