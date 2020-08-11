import React from 'react';
import { Link } from 'react-router-dom';

import shareIcon from '../../images/shareIcon.svg';
import './styles.css';

// const decideToShow = (type, area, category, alcoholicOrNot) => {
//   if (type === 'comida') {
//     return `${area} - ${category}`;
//   }
//   return `${alcoholicOrNot}`;
// };

const DoneRecipesCard = ({
  recipe: { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags },
  index,
}) => {
  return (
    <div className="done-recipes-container">
      <Link to={`/${type}s/${id}`} className="link-img-recipe">
        <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
      </Link>
      <div className="recipes-info">
        <div className="share-container">
          <span data-testid={`${index}-horizontal-top-text`}>
            {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
          </span>
          <img data-testid={`${index}-horizontal-share-btn`} src={shareIcon} alt="Share Recipe" />
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
};

export default DoneRecipesCard;
