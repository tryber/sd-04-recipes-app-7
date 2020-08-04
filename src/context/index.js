import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getFoodFiltersAPI,
  getDrinkFiltersAPI,
  getMealByNameAPI,
  getCocktailByNameAPI,
} from '../services';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [filterFoods, setFilterFoods] = useState([]);
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);

  const contextValue = {
    filterFoods,
    setFilterFoods,
    foodRecipes,
    setFoodRecipes,
    filterDrinks,
    setFilterDrinks,
    drinkRecipes,
    setDrinkRecipes,
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
