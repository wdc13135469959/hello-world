import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Child extends Component {
  render() {

    return (
       <h1>
         {this.props.data}
       </h1>
    );
  }
}



export default class App extends Component {
  render() {
    console.log(this.props)
    return (
        <div>
          <Child data={this.props.id+this.props.type}/>
        </div>
    );
  }
}
