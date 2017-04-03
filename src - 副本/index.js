import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import  App from './App';
import  App1 from './App1';
import  App2 from './App2';
import Container from './container/container';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Container />,
  //   <Router history={hashHistory}>
  //       <Route path="/App" component={ App}/>
  //       <Route path="/App1" component={ App1}/>
  //       <Route path="/App2" component={ App2}/>
  //   </Router>,
  document.getElementById('root')
);
