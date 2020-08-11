import React from 'react';

import shareIcon from '../../images/shareIcon.svg';
import './styles.css';

const DoneRecipesCard = ({ recipe: { area, category, name, image, doneDate, tags }, index }) => {
  return (
    <div className="done-recipes-container">
      <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
      <div className="recipes-info">
        <div className="share-container">
          <span data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</span>
          <img data-testid={`${index}-horizontal-share-btn`} src={shareIcon} alt="Share Recipe" />
        </div>
        <h2 data-testid={`${index}-horizontal-name`} className="recipe-title">
          {name}
        </h2>
        <span data-testid={`${index}-horizontal-done-date`} className="date-made">
          Feita em: {doneDate}
        </span>
        <div className="tags">
          {tags.split(',').map((tag) => (
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
};

export default DoneRecipesCard;
