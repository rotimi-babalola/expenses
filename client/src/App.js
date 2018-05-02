import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gastos</h1>
        </header>
        {/* <Tabs style={{ marginTop: '10px' }}>
          <Tab
            icon={'far fa-credit-card'}
            label="Expense"
            iconStyle={iconStyle}>
            <List>
              <ListItem
                headline="Expense 1"
                icon="far fa-credit-card"
                secondaryText={
                  <p>
                    <span>Grace Ng</span> --
                    Do you have Paris recommendations? Have you ever been?
                  </p>
                }
              />
              <ListItem headline="oi" />
            </List>
          </Tab>
          <Tab icon={'fas fa-chart-line'} label="Analytics" iconStyle={iconStyle}>
            <List>
              <ListItem headline="Soy feliz" />
              <ListItem headline="Tengo 21 años" />
            </List>
          </Tab>
        </Tabs>
        <FooComp /> */}
        <Button type='primary' style={{ marginTop: '10px' }}>Button</Button>
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
