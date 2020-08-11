import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../context';
import {
  getMealByIngredient,
  getMealByNameAPI,
  getMealByFirstLetter,
  getCocktailByIngredient,
  getCocktailByNameAPI,
  getCocktailByFirstLetter,
} from '../services';
import Input from './Input';

const SearchBar = () => {
  const { setFoodsCategory, setDrinksCategory } = useContext(RecipesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeSearch, setTypeSearch] = useState('ingredient');

  const history = useHistory();

  const verifyLength = (resultArray, flag) => {
    switch (flag) {
      case 'meals': {
        if (resultArray && resultArray.length === 1) return history.push(`/comidas/${resultArray[0].idMeal}`);
        else if (!resultArray || resultArray.length === 0) {
          alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else setFoodsCategory([...resultArray]);
        break;
      }
      default:
        if (resultArray && resultArray.length === 1) {
          return history.push(`/bebidas/${resultArray[0].idDrink}`);
        } else if (!resultArray || resultArray.length === 0) {
          alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else setDrinksCategory([...resultArray]);
    }
    return null;
  };

  const verifyTextMeals = (text, radioValue) => {
    if (radioValue === 'ingredient') {
      getMealByIngredient(text).then((resp) => verifyLength(resp.meals, 'meals'));
    } else if (radioValue === 'name') {
      getMealByNameAPI(text).then((resp) => verifyLength(resp.meals, 'meals'));
    } else getMealByFirstLetter(text).then((resp) => verifyLength(resp.meals, 'meals'));
  };

  const verifyTextCocktails = (text, radioValue) => {
    if (radioValue === 'ingredient') {
      getCocktailByIngredient(text).then((resp) => verifyLength(resp.drinks, 'drinks'));
    } else if (radioValue === 'name') {
      getCocktailByNameAPI(text).then((resp) => verifyLength(resp.drinks, 'drinks'));
    } else getCocktailByFirstLetter(text).then((resp) => verifyLength(resp.drinks, 'drinks'));
  };

  const allowSearch = (text, radioValue) => !(radioValue === 'firstLetter' && text.length > 1);

  const verifyPath = (text, radioValue) => {
    if (allowSearch(text, radioValue)) {
      if (window.location.pathname === '/comidas' && allowSearch(text, radioValue)) {
        verifyTextMeals(text, radioValue);
      } else verifyTextCocktails(text, radioValue);
    } else alert('Sua busca deve conter somente 1 (um) caracter');
  };

  return (
    <Input
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      typeSearch={typeSearch}
      setTypeSearch={setTypeSearch}
      verify={verifyPath}
    />
  );
};

export default SearchBar;
