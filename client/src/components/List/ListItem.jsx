import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <i className={props.icon} style={props.iconStyle}/>
          <h3>{props.headline}</h3>
          {props.secondaryText}
        </li>
      </ul>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  icon: PropTypes.string,
  iconStyle: PropTypes.object,
  headline: PropTypes.string,
  secondaryText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default ListItem;
