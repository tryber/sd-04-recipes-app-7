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

const changeClassName = (e, type) => {
  if(type === 'text' && e.className === 'ingredients-item') {
    return e.className = 'ingredients-item-checked';
  }
  e.className = 'ingredients-item';
  return 0;
};

const changeChecked = (e, type) => {
  changeClassName(e, type);
  if (type === 'box' && e.checked) {
    return e.checked = false;
  }
  e.checked = true;
  return 0;
};

const mountList = (ingredients, measures) => (
  <div className="list-container">
    {ingredients.map((item, index) => (
      <div
        data-testid={`${index}-ingredient-step`}
        key={`pai ${item}`}
        className="item-list"
        onClick={() => {
          const diV = document.querySelectorAll('.item-list');
          changeChecked(diV[index].childNodes[0], 'box');
          changeChecked(diV[index].childNodes[1], 'text');
      }}>
        <input
          type="checkbox"
          key={`checkBox ${item} `}
          onChange={() => {
            const diV = document.querySelectorAll('.item-list');
            changeChecked(diV[index].childNodes[0], 'box')
          }}
        />
        <p
          key={`${item} ${measures[index]}`}
          className="ingredients-item"
        >
          {`- ${item} - ${measures[index]}`}
        </p>
      </div>
    ))}
  </div>
);

const Ingredients = ({ list, ingredients, measures }) => {
  if (list === 'false') return mountNotList(ingredients, measures);
  return mountList(ingredients, measures);
};

Ingredients.propTypes = {
  list: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
