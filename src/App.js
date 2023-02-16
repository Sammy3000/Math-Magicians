import React, { Component } from 'react';
import './App.css';
import Calc from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calc />;
  }
}

export default App;
