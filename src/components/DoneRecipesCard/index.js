import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ShareButton from '../ShareButton';

import './styles.css';

const DoneRecipesCard = ({
  recipe: { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags },
  index,
}) => (
  <div className="done-recipes-container">
    <Link to={`/${type}s/${id}`} className="link-img-recipe">
      <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
    </Link>
    <div className="recipes-info">
      <div className="share-container">
        <span data-testid={`${index}-horizontal-top-text`}>
          {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
        </span>
        <ShareButton testid={`${index}-horizontal-share-btn`} path={`/${type}s/${id}`} />
      </div>
      <Link
        to={`/${type}s/${id}`}
        data-testid={`${index}-horizontal-name`}
        className="recipe-title"
      >
        {name}
      </Link>
      <span data-testid={`${index}-horizontal-done-date`} className="date-made">
        Feita em: {doneDate}
      </span>
      <div className="tags">
        {tags.length > 0 &&
          tags.map((tag) => (
            <span
              data-testid={`${index}-${tag}-horizontal-tag`}
              key={`${name}${tag}`}
              className="tag"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  </div>
);

DoneRecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DoneRecipesCard;
