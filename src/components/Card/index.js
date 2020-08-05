import React from 'react';

import './styles.css';

const Card = ({ index, url, name }) => {
  return (
    <div data-testid={`${index}-recipe-card`} className="card-body">
      <img
        data-testid={`${index}-card-img`}
        src={url} alt="Food/Drink"
      />
      <span
        data-testid={`${index}-card-name`}
      >
        {name}
      </span>
    </div>
  );
};

export default Card;
