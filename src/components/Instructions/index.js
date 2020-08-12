import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Instructions = ({ text }) => (
  <div className="instructions-container">
    {text}
  </div>
);

Instructions.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Instructions;
