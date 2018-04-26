import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  // console.log(props, 'props');
  return (
    <React.Fragment>
      <input
        type="radio"
        id={`tab${props.tabIndex}`}
        name="tabs"
        value={`tab${props.tabIndex}`}
        checked={props.isChecked}
        onChange={() => console.log('rotimi') } />
      <label>
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
  handleTabChange: PropTypes.func,
  tabIndex: PropTypes.number,
};

export default Tab;
