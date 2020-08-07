export const getMealByNameAPI = async (nome) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
  const meals = await fetch(URL);
  return meals.json();
};

export const getCocktailByNameAPI = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

export const getMealByIngredient = async (ingrediente) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const meals = await fetch(URL);
  return meals.json();
};

export const getCocktailByIngredient = async (ingrediente) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

export const getMealByFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const meals = await fetch(URL);
  return meals.json();
};

export const getCocktailByFirstLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

export const checkEmail = (email) => {
  if (!email.includes('@') || !email.includes('.')) return false;
  const atpos = email.indexOf('@');
  const dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return false;
  }
  return true;
};
