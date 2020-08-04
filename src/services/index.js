// Pega as comidas.
export const getMealByNameAPI = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const meals = await fetch(URL);
  return meals.json();
};
// // Pega as comidas.
// export const getMealByNameAPI = async (name) => {
//   const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
//   const meals = await fetch(URL);
//   return meals.json();
// };

// Pega as bebidas.
export const getCocktailByNameAPI = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const cocktails = await fetch(URL);
  return cocktails.json();
};

// // Pega as bebidas.
// export const getCocktailByNameAPI = async (name) => {
//   const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
//   const cocktails = await fetch(URL);
//   return cocktails.json();
// };

// Pega os filtros de comidas.
export const getFoodFiltersAPI = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const foodFilters = await fetch(URL);
  return foodFilters.json();
};

// Pega os filtros de bebidas.
export const getDrinkFiltersAPI = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const drinkFilters = await fetch(URL);
  return drinkFilters.json();
};

export const checkEmail = (email) => {
  // const divid = email.split('@');
  // const chars = email.includes('@') && email.includes('.');
  // const posArroba = email.indexOf('@');
  // const posDot = email.indexOf('.');
  // if (email.indexOf('@') < email.indexOf('.')) return false;
  if (!email.includes('@') || !email.includes('.')) return false;
  const atpos = email.indexOf('@');
  const dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) return false;
  return true;
};
