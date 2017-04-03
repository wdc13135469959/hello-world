import React, { Component } from 'react';


class App1 extends Component {
  render() {
    return (
      <div className="App1">
        456
          {
              this.props.children
          }
      </div>
    );
  }
}

export default App1;

//123,
