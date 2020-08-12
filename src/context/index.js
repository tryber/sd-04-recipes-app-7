import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getFoodFiltersAPI,
  getDrinkFiltersAPI,
  getMealByNameAPI,
  getCocktailByNameAPI,
  getMealById,
  getCocktailById,
} from '../services';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // Sessão referente a comidas
  const [filterFoods, setFilterFoods] = useState([]); // filtros.
  const [foodRecipes, setFoodRecipes] = useState([]); // cards.
  const [foodsCategory, setFoodsCategory] = useState([]); // Estado de Comidas
  const [foodKey, setFoodKey] = useState(''); // Estado de Comidas
  const [foodId, setFoodId] = useState([]);

  // Sessão referente a bebidas
  const [filterDrinks, setFilterDrinks] = useState([]); // filtros.
  const [drinkRecipes, setDrinkRecipes] = useState([]); // cards.
  const [drinksCategory, setDrinksCategory] = useState([]); // Estado de Bebidas
  const [drinkKey, setDrinkKey] = useState(''); // Estado de Bebidas
  const [drinkId, setDrinkId] = useState('');

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
    foodsCategory,
    setFoodsCategory,
    foodKey,
    setFoodKey,
    drinksCategory,
    setDrinksCategory,
    drinkKey,
    setDrinkKey,
    foodId,
    setFoodId,
    drinkId,
    setDrinkId,
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
