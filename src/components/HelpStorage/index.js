const getLS = (key) => JSON.parse(localStorage.getItem(key));

const setLS = (key, value) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  favorites.push(value);
  localStorage.setItem(key, JSON.stringify(favorites));
};

export { getLS, setLS };
