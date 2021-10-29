import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './store/reducer';
import resultReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] dispatching', action);
      const result = next(action);
      console.log('[Middleware] dispatching', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
