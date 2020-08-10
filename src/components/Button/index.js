import React from 'react';

import { getMealsByCategoryAPI, getCocktailByCategoryAPI } from '../../services';

import './styles.css';

const auxMeals = (strCategory, idKey, setIdKey, category, setCategory) => {
  if (idKey !== strCategory) {
    setIdKey(strCategory);
    getMealsByCategoryAPI(strCategory).then((resp) => setCategory([...resp.meals]));
  } else {
    getMealsByCategoryAPI(strCategory).then((resp) =>
      (category.length ? setCategory([]) : setCategory([...resp.meals])),
    );
  }
};

const auxCockTails = (strCategory, idKey, setIdKey, category, setCategory) => {
  if (idKey !== strCategory) {
    setIdKey(strCategory);
    getCocktailByCategoryAPI(strCategory).then((resp) => setCategory([...resp.drinks]));
  } else {
    getCocktailByCategoryAPI(strCategory).then((resp) =>
      (category.length ? setCategory([]) : setCategory([...resp.drinks])),
    );
  }
};

const meals = (strCategory, idKey, setIdKey, category, setCategory) => (
  <button
    type="button"
    data-testid={`${strCategory}-category-filter`}
    className="category-filter"
    onClick={() => auxMeals(strCategory, idKey, setIdKey, category, setCategory)}
  >
    {strCategory}
  </button>
);

const cockTails = (strCategory, idKey, setIdKey, category, setCategory) => (
  <button
    type="button"
    data-testid={`${strCategory}-category-filter`}
    className="category-filter"
    onClick={() => auxCockTails(strCategory, idKey, setIdKey, category, setCategory)
      // if (idKey !== strCategory) {
      //   setIdKey(strCategory);
      //   getCocktailByCategoryAPI(strCategory).then((resp) => setCategory([...resp.drinks]));
      // } else {
      //   getCocktailByCategoryAPI(strCategory).then((resp) =>
      //     (category.length ? setCategory([]) : setCategory([...resp.drinks])),
      //   );
      // }
    }
  >
    {strCategory}
  </button>
);

const Button = ({ strCategory, idKey, setIdKey, category, setCategory, flag }) => {
  if (flag === 'meals') return meals(strCategory, idKey, setIdKey, category, setCategory);
  return cockTails(strCategory, idKey, setIdKey, category, setCategory);
};

export default Button;
