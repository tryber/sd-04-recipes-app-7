import {
  getMealByIngredient,
  getMealByNameAPI,
  getMealByFirstLetter,
  getCocktailByIngredient,
  getCocktailByNameAPI,
  getCocktailByFirstLetter,
} from '../services';

const verifyLength = (resultArray, flag, setCategory, history) => {
  switch (flag) {
    case 'meals': {
      if (resultArray && resultArray.length === 1)
        return history.push(`/comidas/${resultArray[0].idMeal}`);
      else if (!resultArray || resultArray.length === 0) {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else setCategory([...resultArray]);
      break;
    }
    default:
      if (resultArray && resultArray.length === 1) {
        return history.push(`/bebidas/${resultArray[0].idDrink}`);
      } else if (!resultArray || resultArray.length === 0) {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else setCategory([...resultArray]);
  }
  return null;
};

export const verifyTextMeals = (text, radioValue, setFoodsCategory, history) => {
  if (radioValue === 'ingredient') {
    getMealByIngredient(text).then((resp) =>
      verifyLength(resp.meals, 'meals', setFoodsCategory, history),
    );
  } else if (radioValue === 'name') {
    getMealByNameAPI(text).then((resp) =>
      verifyLength(resp.meals, 'meals', setFoodsCategory, history),
    );
  } else
    getMealByFirstLetter(text).then((resp) =>
      verifyLength(resp.meals, 'meals', setFoodsCategory, history),
    );
};

export const verifyTextCocktails = (text, radioValue, setDrinksCategory, history) => {
  if (radioValue === 'ingredient') {
    getCocktailByIngredient(text).then((resp) =>
      verifyLength(resp.drinks, 'drinks', setDrinksCategory, history),
    );
  } else if (radioValue === 'name') {
    getCocktailByNameAPI(text).then((resp) =>
      verifyLength(resp.drinks, 'drinks', setDrinksCategory, history),
    );
  } else
    getCocktailByFirstLetter(text).then((resp) =>
      verifyLength(resp.drinks, 'drinks', setDrinksCategory, history),
    );
};
