import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const mountList = (ingredients, measures) => (
    <div className="list-container">
      {ingredients.map((item, index) => (
        <p
          key={`${item} ${measures[index]}`}
          className="ingredients-item"
        >
          {`- ${item} - ${measures[index]}`}
        </p>
      ))}
    </div>
  );

const Ingredients = ({ list, ingredients, measures }) => {
  if (!list) return mountList(ingredients, measures);
  return <p />
};

Ingredients.propTypes = {
  list: PropTypes.bool.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
