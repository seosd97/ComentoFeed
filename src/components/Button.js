import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  width,
  height,
  fontSize = 22,
  description = "",
}) => {
  const style = {
    width,
    height,
    fontSize,
  };

  return <button style={style} className="cui-button">{description}</button>;
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
  description: PropTypes.string,
};

export default Button;
