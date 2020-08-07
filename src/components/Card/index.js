import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = ({ index, url, name }) => (
  <div data-testid={`${index}-recipe-card`} className="card-body">
    <img data-testid={`${index}-card-img`} src={url} alt="Food/Drink" />
    <span data-testid={`${index}-card-name`}>{name}</span>
  </div>
);

Card.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
