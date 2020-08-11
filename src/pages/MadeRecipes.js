import React from 'react';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCards';

const MadeRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(doneRecipes);
  return (
    <div>
      <Header title="Receitas Feitas" visible={false} />
      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-food-btn">Food</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>
      {doneRecipes.map((recipe, index) => (
        <DoneRecipesCard key={recipe.id} recipe={recipe} index={index} />
      ))}
    </div>
  );
};
export default MadeRecipes;
