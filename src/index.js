import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();

store.subscribe(render)
