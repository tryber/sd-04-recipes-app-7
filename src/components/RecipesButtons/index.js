import React from 'react';

import './styles.css';

const RecipesButtons = () => {
  return (
    <div className="recipes-buttons-container">
      <button className="recipes-button" data-testid="filter-by-all-btn">All</button>
      <button className="recipes-button" data-testid="filter-by-food-btn">Food</button>
      <button className="recipes-button" data-testid="filter-by-drink-btn">Drinks</button>
    </div>
  );
};

export default RecipesButtons;
