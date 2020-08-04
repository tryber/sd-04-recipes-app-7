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
      {/* {foodRecipes.length !== 0 &&
        foodRecipes.map(({ strMealThumb, strMeal }) =>
          index < 5 ? (
            <Card />
          ) : null,
      )} */}
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
