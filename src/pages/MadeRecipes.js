import React from 'react';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCards';
import RecipesButtons from '../components/RecipesButtons';

const MadeRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      <Header title="Receitas Feitas" visible={false} />
      <RecipesButtons />
      {doneRecipes.map((recipe, index) => (
        <DoneRecipesCard key={recipe.id} recipe={recipe} index={index} />
      ))}
    </div>
  );
};
export default MadeRecipes;
