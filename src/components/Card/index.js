import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const Card = ({ id, flag, index, url, name }) => (
  <Link
    to={`/${flag === 'comidas' ? 'comidas' : 'bebidas'}/${id}`}
    data-testid={`${index}-recipe-card`}
    className="card-body"
  >
    <div className="link-details">
      <img data-testid={`${index}-card-img`} src={url} alt="Food/Drink" />
      <span className="card-desc" data-testid={`${index}-card-name`}>
        {name}
      </span>
    </div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
