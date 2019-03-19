import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
        <Board knightPosition={[1, 1]} />
    );
  }
}

export default App;
