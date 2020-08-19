import React, { useState } from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';
import RecipesButtons from '../components/RecipesButtons';


function FavoriteRecipes() {
  const [filterRecipes, setFilterRecipes] = useState([]);

  const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  return (
    <div>
      <Header title="Receitas Favoritas" visible={false} />
      <RecipesButtons allRecipes={favoriteList} setRecipesFilter={setFilterRecipes}  />
      {filterRecipes.length !==0 &&
        filterRecipes.map((recipe, index) => (
          <FavoriteCard key={recipe.id} recipe={recipe} index={index} />
        ))}
      {filterRecipes.length === 0 &&
        favoriteList.length !== 0 &&
        favoriteList.map((recipe, index) => (
          <FavoriteCard key={recipe.id} recipe={recipe} index={index} />
        ))}
    </div>
  );
}

export default FavoriteRecipes;
