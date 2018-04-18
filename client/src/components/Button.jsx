import React from 'react';
import PropTypes from 'prop-types';
import theme from '../common/theme';


const Button = (props) => {
  const buttonStyle = { ...props.style };

  if (props.extraSmall) {
    buttonStyle.height = '36px';
    buttonStyle.fontSize = '13px';
    buttonStyle.width = '90%';
    buttonStyle.margin = '10px';
    buttonStyle.borderRadius = '3px';
  }

  if (props.medium) {
    buttonStyle.height = '36px';
    buttonStyle.fontSize = '13px';
    buttonStyle.borderRadius = '3px';
  }

  if (props.primary) {
    buttonStyle.borderRadius = '5px';
    buttonStyle.backgroundColor = theme.colors.primary; /* Green */
    buttonStyle.border = 'none';
    buttonStyle.color = 'white';
    buttonStyle.padding = '15px 32px';
    buttonStyle.textAlign = 'center';
    buttonStyle.textDecoration = 'none';
    buttonStyle.display = 'inline-block';
    buttonStyle.fontSize = '16px';
  }

  if (props.height) buttonStyle.height = props.height;

  if (props.secondary) {
    buttonStyle.color = theme.greys.lightest;
    buttonStyle.backgroundColor = theme.colors.secondary;
  }

  if (props.color) {
    buttonStyle.backgroundColor = props.color;
  }

  return (
    <button
      style={buttonStyle}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type || 'button'}
      className={props.className || undefined}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  medium: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  extraSmall: PropTypes.bool,
  height: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  primary: true,
};

export default Button;
