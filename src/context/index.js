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
  const [filterFoods, setFilterFoods] = useState([]); // filtros.
  const [foodRecipes, setFoodRecipes] = useState([]); // cards.

  const [filterDrinks, setFilterDrinks] = useState([]); // filtros.
  const [drinkRecipes, setDrinkRecipes] = useState([]); // cards.

  const [title, setTitle] = useState('');
  const [searchbar, setSearchbar] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const context = {
    filterFoods,
    setFilterFoods,
    foodRecipes,
    setFoodRecipes,
    filterDrinks,
    setFilterDrinks,
    drinkRecipes,
    setDrinkRecipes,
    title,
    searchbar,
    userEmail,
    userPassword,
    setTitle,
    setSearchbar,
    setUserEmail,
    setUserPassword,
  };

  useEffect(() => {
    getFoodFiltersAPI().then((resp) => setFilterFoods([...resp.meals]));
    getDrinkFiltersAPI().then((resp) => setFilterDrinks([...resp.drinks]));
    getMealByNameAPI().then((resp) => setFoodRecipes([...resp.meals]));
    getCocktailByNameAPI().then((resp) => setDrinkRecipes([...resp.drinks]));
  }, []);

  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

RecipesContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RecipesContext, RecipesProvider as Provider };
