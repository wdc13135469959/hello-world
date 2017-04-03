import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
    <div>
      {
        names.map(function (name) {
          return <div>Hello, {name}!</div>
        })
      }

    </div>,document.getElementById('root')
);