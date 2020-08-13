import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CarouselCard = ({ id, flag, index, url, name }) => {
  return (
    <Link to={`/${flag === 'comidas' ? 'comidas' : 'bebidas'}/${id}`}>
      <div className="carousel-card-body">
        <div className="carousel-link-details">
          <img data-testid={`${index}-recomendation-card`} src={url} alt="Food/Drink" />
          <span className="carousel-card-desc" data-testid={`${index}-recomendation-title`}>
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
