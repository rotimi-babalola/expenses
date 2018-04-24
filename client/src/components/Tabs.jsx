import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'tab1',
    };
  }

  handleOptionChanged = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <main>
        <input
          type="radio"
          id="tab1"
          name="tabs"
          value="tab1"
          checked={this.state.selectedOption === 'tab1'}
          onChange={this.handleOptionChanged}/>
        <label htmlFor="tab1">Codepen</label>

        <input
          type="radio"
          id="tab2"
          name="tabs"
          value="tab2"
          checked={this.state.selectedOption === 'tab2'}
          onChange={this.handleOptionChanged}/>
        <label htmlFor="tab2">Dribble</label>

        <input
          type="radio"
          id="tab3"
          name="tabs"
          value="tab3"
          checked={this.state.selectedOption === 'tab3'}
          onChange={this.handleOptionChanged}/>
        <label htmlFor="tab3">DropBox</label>

        <section id="content1">
          <p>
            Jo soc un nen
          </p>
        </section>

        <section id="content2">
          <p>
            Falas Portugues?
          </p>
        </section>

        <section id="content3">
          <p>
            Tengo tres gatas
          </p>
        </section>
      </main>
    );
  }
}

export default Tabs;
