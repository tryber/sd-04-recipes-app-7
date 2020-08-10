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

// const location = window.location.pathname;
// let option = '';
// let data = '';
// const divs = document.querySelectorAll('.recipes');

// const radioOption = (opt) => {
//   option = opt;
// };

// const mFilters = (filter) =>
//   filter.slice(0, 12).map((cards, index) => {
//     const headerDiv = document.querySelector('#header');
//     const div = document.createElement('div');
//     div.setAttribute('class', 'recipes');
//     div.setAttribute('key', `${cards.strMeal}`);
//     div.setAttribute('data-testid', `${index}-recipe-card`);
//     headerDiv.appendChild(div);
//     const img = document.createElement('IMG');
//     img.setAttribute('style', 'width: 100px;');
//     img.setAttribute('data-testid', `${index}-card-img`);
//     img.src = `${cards.strMealThumb}`;
//     img.alt = `${cards.strMeal}`;
//     const p = document.createElement('P');
//     p.setAttribute('data-testid', `${index}-card-name`);
//     const mealsName = document.createTextNode(`${cards.strMeal}`);
//     p.appendChild(mealsName);
//     div.appendChild(img);
//     return div.appendChild(p);
//   });

// const dFilters = (filter) =>
//   filter.slice(0, 12).map((cards, index) => {
//     const headerDiv = document.querySelector('#header');
//     const div = document.createElement('div');
//     div.setAttribute('class', 'recipes');
//     div.setAttribute('key', `${cards.strDrink}`);
//     div.setAttribute('data-testid', `${index}-recipe-card`);
//     headerDiv.appendChild(div);
//     const img = document.createElement('IMG');
//     img.setAttribute('style', 'width: 100px;');
//     img.setAttribute('data-testid', `${index}-card-img`);
//     img.src = `${cards.strDrinkThumb}`;
//     img.alt = `${cards.strDrink}`;
//     const p = document.createElement('P');
//     p.setAttribute('data-testid', `${index}-card-name`);
//     const drinksName = document.createTextNode(`${cards.strDrink}`);
//     p.appendChild(drinksName);
//     div.appendChild(img);
//     return div.appendChild(p);
//   });

// const condicionalsMeal = (text) => {
//   console.log(text);
//   if (option === 'ingredient') {
//     data = getMealByIngredient(text);
//   }
//   if (option === 'name') {
//     data = getMealByNameAPI(text);
//   }
//   if (option === 'firstLetter') {
//     if (text.length > 1) {
//       alert('Sua busca deve conter somente 1 (um) caracter');
//     }
//     data = getMealByFirstLetter(text[0]);
//   }
// };

// const condicionalsCocktail = (text) => {
//   if (option === 'ingredient') {
//     data = getCocktailByIngredient(text);
//   }
//   if (option === 'name') {
//     data = getCocktailByNameAPI(text);
//   }
//   if (option === 'firstLetter') {
//     if (text.length > 1) {
//       alert('Sua busca deve conter somente 1 (um) caracter');
//     }
//     data = getCocktailByFirstLetter(text[0]);
//   }
// };

// const path = (text) => {
//   switch (location) {
//     case '/comidas':
//       condicionalsMeal(text);
//       break;
//     case '/bebidas':
//       condicionalsCocktail(text);
//       break;
//     default:
//       return 'oi';
//   }
//   return '';
// };

// const mealReturn = (history) => {
//   data.then(async (meal) => {
//     if (meal.meals === null) {
//       alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
//     }
//     if (meal.meals.length === 1) {
//       return history.push(`/comidas/${meal.meals[0].idMeal}`);
//     }
//     return mFilters(await meal.meals);
//   });
// };

// const drinkReturn = (history) => {
//   data.then(async (drink) => {
//     if (drink.drinks === null) {
//       alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
//     }
//     if (drink.drinks.length === 1) {
//       return history.push(`/bebidas/${drink.drinks[0].idDrink}`);
//     }
//     return dFilters(await drink.drinks);
//   });
// };

// const retur = (history) => {
//   if (location === '/comidas') {
//     mealReturn(history);
//   }
//   if (location === '/bebidas') {
//     drinkReturn(history);
//   }
// };

// const onClick = (text, history) => {
//   if (history.location.path === '/comidas') condicionalsMeal(text);
//   else condicionalsCocktail(text);
// };

const verifyTextMeals = (text, typeSearch, setFoodsCategory) => {
  if (typeSearch === 'ingredient') {
    getMealByIngredient(text).then((resp) => setFoodsCategory(resp.meals));
  }
  // else if () {

  // } else ;
};

const verifyTextCocktails = (text, typeSearch, setFoodsCategory) => {
  if (typeSearch === 'ingredient') {
    getMealByIngredient(text).then((resp) => setFoodsCategory(resp.meals));
  }
  // else if () {

  // } else ;
};

const verifyPath = (text, typeSearch, category) => {
  console.log(window.location.pathname);
  if (window.location.pathname === '/comidas') verifyTextMeals(text, typeSearch, category);
  else verifyTextCocktails(text, typeSearch, category);
};

export default function SearchBar() {
  const { setFoodsCategory } = useContext(RecipesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeSearch, setTypeSearch] = useState('ingredient');
  // const history = useHistory();
  // const [text, setText] = useState('');
  return (
    <Input
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      typeSearch={typeSearch}
      setTypeSearch={setTypeSearch}
      verify={verifyPath}
      setFoodsCategory={setFoodsCategory}
    />
    // <Input
    //   onClick={() => onClick(text, history)}
    //   setText={(e) => setText(e.target.value)}
    //   radioOption={(e) => radioOption(e.target.id)}
    // />
  );
}
