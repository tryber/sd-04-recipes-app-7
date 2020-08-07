import React from 'react';

import Card from '../Card';

// Opções específicas de comidas
const foodsCharge = (category, recipes) => {
  if (!category.length) {
    return (
      <div className="recipes-container">
        {recipes.map(
          ({ strMealThumb, strMeal }, index) =>
            index < 12 && <Card key={strMeal} index={index} url={strMealThumb} name={strMeal} />,
        )}
      </div>
    );
  }
  return (
    category.length && (
      <div className="recipes-container">
        {category.map(
          ({ strMealThumb, strMeal }, index) =>
            index < 12 && <Card key={strMeal} index={index} url={strMealThumb} name={strMeal} />,
        )}
      </div>
    )
  );
};

// Opções específicas de bebidas.
const drinksCharge = (category, recipes) => {
  if (!category.length) {
    return (
      <div className="recipes-container">
        {recipes.map(
          ({ strDrinkThumb, strDrink }, index) =>
            index < 12 && <Card key={strDrink} index={index} url={strDrinkThumb} name={strDrink} />,
        )}
      </div>
    );
  }
  return (
    category.length && (
      <div className="recipes-container">
        {category.map(
          ({ strDrinkThumb, strDrink }, index) =>
            index < 12 && <Card key={strDrink} index={index} url={strDrinkThumb} name={strDrink} />,
        )}
      </div>
    )
  );
};

const LoadCards = ({ flag, category, recipes }) => 
  flag === 'foods' ? foodsCharge(category, recipes) : drinksCharge(category, recipes);

export default LoadCards;
