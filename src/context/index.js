import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getFoodFiltersAPI,
  getDrinkFiltersAPI,
  getMealByNameAPI,
  getCocktailByNameAPI,
  foodsObj,
  drinksObj,
} from '../services';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [filterFoods, setFilterFoods] = useState([]); // filtros.
  const [foodRecipes, setFoodRecipes] = useState([]); // cards.
  
  const [filterDrinks, setFilterDrinks] = useState([]); // filtros.
  const [drinkRecipes, setDrinkRecipes] = useState([]); // cards.

  // Toggles de comidas e bebidas.
  const [toggleFoods, setToggleFoods] = useState(foodsObj);
  const [toggleDrinks, setToggleDrinks] = useState(drinksObj);

  const contextValue = {
    filterFoods,
    setFilterFoods,
    foodRecipes,
    setFoodRecipes,
    filterDrinks,
    setFilterDrinks,
    drinkRecipes,
    setDrinkRecipes,
    toggleFoods,
    setToggleFoods,
    toggleDrinks,
    setToggleDrinks,
  };

  useEffect(() => {
    getFoodFiltersAPI().then((resp) => setFilterFoods([...resp.meals]));
    getDrinkFiltersAPI().then((resp) => setFilterDrinks([...resp.drinks]));
    getMealByNameAPI().then((resp) => setFoodRecipes([...resp.meals]));
    getCocktailByNameAPI().then((resp) => setDrinkRecipes([...resp.drinks]));
  }, []);

  return <RecipesContext.Provider value={contextValue}>{children}</RecipesContext.Provider>;
};

RecipesContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RecipesContext, RecipesProvider as Provider };
