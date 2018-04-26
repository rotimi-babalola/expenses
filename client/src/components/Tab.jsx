import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  return (
    <React.Fragment>
      <input
          type="radio"
          id={`tab${props.tabIndex}`}
          name="tabs"
          value={`tab${props.tabIndex}`}
          checked={props.isChecked}
          onChange={props.setActiveTab} />
      <label htmlFor={`tab${props.tabIndex}`}>
        {props.label}
        <i className={props.icon}></i>
      </label>
      <section>
        {props.children}
      </section>
    </React.Fragment>
  );
};

Tab.propTypes = {
  isChecked: PropTypes.bool,
  children: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  setActiveTab: PropTypes.func,
  tabIndex: PropTypes.number,
};

export default Tab;
