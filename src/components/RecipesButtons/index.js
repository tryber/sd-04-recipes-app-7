import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const filterByType = (allRecipes, setRecipesFilter, type) => {
  const filteredRecipes = allRecipes.filter((item) => item.type === type);
  setRecipesFilter([...filteredRecipes]);
};

const RecipesButtons = ({ allRecipes, setRecipesFilter }) => (
  <div className="recipes-buttons-container">
    <button
      className="recipes-button"
      data-testid="filter-by-all-btn"
      onClick={() => setRecipesFilter([])}
    >
      All
    </button>
    <button
      className="recipes-button"
      data-testid="filter-by-food-btn"
      onClick={() => filterByType(allRecipes, setRecipesFilter, 'comida')}
    >
      Food
    </button>
    <button
      className="recipes-button"
      data-testid="filter-by-drink-btn"
      onClick={() => filterByType(allRecipes, setRecipesFilter, 'bebida')}
    >
      Drinks
    </button>
  </div>
);

RecipesButtons.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRecipesFilter: PropTypes.func.isRequired,
};

export default RecipesButtons;
