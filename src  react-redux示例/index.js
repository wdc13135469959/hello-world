import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { Router, Route, hashHistory } from 'react-router';
import {createStore} from 'redux';
import{Provider}from 'react-redux';
import todo from './reducers';

let store = createStore(todo);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
