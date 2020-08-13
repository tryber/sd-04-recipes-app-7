import React from 'react';

import Card from '../Card';

const renderCard = (id, flag, index, url, name) => (
  <Card
    id={id}
    flag={flag}
    index={index}
    url={url}
    name={name}
  />
);

// Opções específicas de comidas
const foodsCharge = (category, recipes) => {
  if (!category.length) {
    return (
      <div className="recipes-container">
        {recipes.map(
          ({ strMealThumb, strMeal, idMeal }, index) =>
            index < 12 && renderCard(idMeal, 'comidas', index, strMealThumb, strMeal)
        )}
      </div>
    );
  }
  return (
    category.length && (
      <div className="recipes-container">
        {category.map(
          ({ strMealThumb, strMeal, idMeal }, index) =>
          index < 12 && renderCard(idMeal, 'comidas', index, strMealThumb, strMeal)
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
          ({ strDrinkThumb, strDrink, idDrink }, index) =>
          index < 12 && renderCard(idDrink, 'bebidas', index, strDrinkThumb, strDrink)
        )}
      </div>
    );
  }
  return (
    category.length && (
      <div className="recipes-container">
        {category.map(
          ({ strDrinkThumb, strDrink, idDrink }, index) =>
          index < 12 && renderCard(idDrink, 'bebidas', index, strDrinkThumb, strDrink)
        )}
      </div>
    )
  );
};

const LoadCards = ({ flag, category, recipes }) => {
  if (flag === 'foods') return foodsCharge(category, recipes);
  return drinksCharge(category, recipes);
};

export default LoadCards;
