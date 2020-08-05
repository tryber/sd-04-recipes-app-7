import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import Card from '../components/Card';

const MainPageFoods = () => {
  const { filterFoods, foodRecipes } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      {filterFoods.length !== 0 &&
        filterFoods.map(({ strCategory }, index) =>
          index < 5 ? (
            <button key={strCategory} type="button" data-testid={`${strCategory}-category-filter`}>
              {strCategory}
            </button>
          ) : null,
        )}
      {foodRecipes.map(
        ({ strMealThumb, strMeal }, index) =>
          index < 12 && <Card key={strMeal} index={index} url={strMealThumb} name={strMeal} />,
      )}
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
