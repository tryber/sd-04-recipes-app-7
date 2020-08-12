import React, { useState } from 'react';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCards';
import RecipesButtons from '../components/RecipesButtons';

const MadeRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [recipesFilter, setRecipesFilter] = useState([]);
  return (
    <div>
      <Header title="Receitas Feitas" visible={false} />
      <RecipesButtons allRecipes={doneRecipes} setRecipesFilter={setRecipesFilter} />
      {recipesFilter.length !== 0 &&
        recipesFilter.map((recipe, index) => (
          <DoneRecipesCard key={recipe.id} recipe={recipe} index={index} />
        ))}
      {recipesFilter.length === 0 &&
        doneRecipes.map((recipe, index) => (
          <DoneRecipesCard key={recipe.id} recipe={recipe} index={index} />
        ))}
    </div>
  );
};
export default MadeRecipes;
