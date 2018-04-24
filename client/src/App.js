import React, { Component } from 'react';
import './App.css';
import { Button } from './components';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gastos</h1>
        </header>
        <Button style={{ marginTop: '10px' }}>Sample</Button>
      </div>
    );
  }
}

export default App;
