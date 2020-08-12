import React from 'react'
import PropTypes from 'prop-types';


function RecipesButtons({ handleClick }) {
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        onClick={() => handleClick('all')}
        className="recipes-button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        onClick={() => handleClick('comida')}
        className="recipes-button"
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={() => handleClick('bebida')}
        className="recipes-button"
      >
        Drinks
      </button>
    </div>
  );
}

RecipesButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default RecipesButtons;
