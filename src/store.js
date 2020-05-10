import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers'
const initialState = {};

let middleware = [ thunk ];
// only put the logger if the devMode is on
  middleware = [ ...middleware, createLogger() ];
  const store= createStore(appReducer, initialState, applyMiddleware(...middleware));

  export default store;