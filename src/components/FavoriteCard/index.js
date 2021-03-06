import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FavoriteButon from '../../images/blackHeartIcon.svg';

import ShareButton from '../ShareButton';

import '../DoneRecipesCard/styles.css';

const FavoriteCard = ({
  recipe: { id, type, area, category, alcoholicOrNot, name, image },
  index,
}) => (
  <div className="done-recipes-container">
    <Link to={`/${type}s/${id}`} className="lnk-img-recipe">
      <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
    </Link>
    <div className="rcipes-info">
      <div className="sare-container">
        <span data-testid={`${index}-horizontal-top-text`}>
          {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
        </span>
        <ShareButton testid={`${index}-horizontal-share-btn`} path={`/${type}s/${id}`} />
      </div>
      <Link
        to={`/${type}s/${id}`}
        data-testid={`${index}-horizontal-name`}
        className="rcipe-title"
      >
        {name}
      </Link>
      <button
        id={id}
        data-testid={`${index}-horizontal-favorite-btn`}
      >
        <img src={FavoriteButon} alt="Favorite Icon" />
      </button>
    </div>
  </div>
);

FavoriteCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FavoriteCard;
