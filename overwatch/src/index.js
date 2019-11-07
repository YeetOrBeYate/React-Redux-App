import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//all needed redux imports
import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducer from "./reducer/Reducer"

const store = createStore(reducer, applyMiddleware(thunk,logger));


ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
