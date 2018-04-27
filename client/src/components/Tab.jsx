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
      <label htmlFor={`tab${props.tabIndex}`} style={props.labelStyle}>
        <i className={props.icon} style={props.iconStyle}/>
        {props.label}
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
  labelStyle: PropTypes.object,
  iconStyle: PropTypes.object,
};

export default Tab;
