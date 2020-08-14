import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const mountNotList = (ingredients, measures) => (
  <div className="list-container">
    {ingredients.map((item, index) => (
      <p
        data-testid={`${index}-ingredient-name-and-measure`}
        key={`${item} ${measures[index]}`}
        className="ingredients-item"
      >
        {`- ${item} - ${measures[index]}`}
      </p>
    ))}
  </div>
);

const mountList = (ingredients, measures) => {
  return (
    <div />
  );
};

const Ingredients = ({ list, ingredients, measures }) => {
  if (!list) return mountNotList(ingredients, measures);
  {mountList(ingredients, measures)};
};

Ingredients.propTypes = {
  list: PropTypes.bool.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
