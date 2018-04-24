import React, { Component } from 'react';
import './App.css';
import { Button, Tabs } from './components';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gastos</h1>
        </header>
        <Tabs />
        <Button style={{ marginTop: '10px' }}>Add Expense</Button>
      </div>
    );
  }
}

export default App;
