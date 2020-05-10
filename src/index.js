import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import { Provider } from 'react-redux';
import store from './store';
import UsersContainer from './Users/UsersContainer';

window.React = React;
  window.store = store;
ReactDOM.render(<Provider store={store}><UsersContainer/></Provider>, document.getElementById('root'));