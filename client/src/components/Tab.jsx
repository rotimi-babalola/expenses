import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  return (
    <div>
      <input
        type="radio"
        id="tab1"
        name="tabs"
        value="tab1"
        checked={props.isChecked}
        onChange={this.handleTabChange} />
      <label htmlFor="tab1">
        {props.label}
        <i className={props.icon}></i>
      </label>
      <section>
        {props.children}
      </section>
    </div>
  );
};

Tab.propTypes = {
  isChecked: PropTypes.bool,
  children: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Tab;
