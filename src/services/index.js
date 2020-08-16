// Pega as comidas.
export const getMealByNameAPI = async (name = null) => {
  const urlWithParam = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const urlWithoutParam = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const URL = name ? urlWithParam : urlWithoutParam;
  const meals = await fetch(URL);
  return meals.json();
};

// Pega as bebidas.
export const getCocktailByNameAPI = async (name = null) => {
  const urlWithParam = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const urlWithoutParam = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const URL = name ? urlWithParam : urlWithoutParam;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

export const getMealByIngredient = async (ingrediente) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const meals = await fetch(URL);
  return meals.json();
};

// Filtra comidas por categoria.
export const getMealsByCategoryAPI = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

// Filtra bebidas por categoria.
export const getCocktailByCategoryAPI = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

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

export const getMealById = async (Id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`;
  const meals = await fetch(URL);
  return meals.json();
};

export const getCocktailById = async (Id) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${Id}`;
  const cocktails = await fetch(URL);
  return cocktails.json();
};

export const randomFoodId = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const id = await fetch(URL);
  return id.json();
};

export const randomDrinkId = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const id = await fetch(URL);
  return id.json();
};
