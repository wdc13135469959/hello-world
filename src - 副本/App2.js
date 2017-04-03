import React, { Component } from 'react';


class App2 extends Component {
  render() {
    return (
      <div className="App2">
         789
          {
              this.props.children
          }

      </div>
    );
  }
}

export default App2;
