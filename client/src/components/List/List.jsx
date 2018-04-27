import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListStyle.css';

class List extends Component {
  constructor(props) {
    super(props);

    // I don't see any need for this
    // but I'm just doing it anyway
    // for the future 🤔
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default List;
