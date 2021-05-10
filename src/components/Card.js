import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.scss';

const Card = ({ children, className }) => {
  return (
    <article className={`${className} card-root`}>
      {children}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
}

export default Card;
