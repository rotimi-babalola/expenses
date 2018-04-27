import React, { Component } from 'react';
import './App.css';
import { Button, Tabs, Tab } from './components';

class App extends Component {

  render() {
    const { iconStyle } = this.getStyles();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gastos</h1>
        </header>
        <Tabs style={{ marginTop: '10px' }}>
          <Tab
            icon={'far fa-credit-card'}
            label="Expense"
            iconStyle={iconStyle}>
            <p>hello</p>
          </Tab>
          <Tab icon={'fas fa-chart-line'} label="Analytics" iconStyle={iconStyle}>
            <p>hellkd</p>
          </Tab>
        </Tabs>
        <Button style={{ marginTop: '10px' }}>Add Expense</Button>
      </div>
    );
  }

  getStyles() {
    return {
      iconStyle: {
        marginRight: '5px',
      },
    };
  }
}

export default App;
