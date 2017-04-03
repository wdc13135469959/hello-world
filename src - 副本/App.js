import React, { Component } from 'react';


class App extends Component {

  render() {
    return (
      <div className="App">
        123
          {
              this.props.children

          }
      </div>
    );
  }
}

export default App;
