export const getMealByNameAPI = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const meals = await fetch(URL);
  return meals.json();
};

export const getCocktailByNameAPI = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

export const getFilterByIngredient = async (ingrediente) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const ingredient = await fetch(URL);
  return ingredient.json();
};

export const getFilterByFirstLetter = async (primeiraLetra) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;
  const firstLetter = await fetch(URL);
  return firstLetter.json();
};
