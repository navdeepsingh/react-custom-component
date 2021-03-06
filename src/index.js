import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Local Imports
import App from './App';
import rootReducer from "./components/day-night-switcher/redux/reducers";

// Assets
import './index.css';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
