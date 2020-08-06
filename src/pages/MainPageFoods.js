import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import Card from '../components/Card';

import { getMealsByCategoryAPI } from '../services';
import { useState } from 'react';

const MainPageFoods = () => {
  const { filterFoods, foodRecipes } = useContext(RecipesContext);
  const [foodsCategory, setFoodsCategory] = useState([]);
  return (
    <div>
      <Header />
      {filterFoods.length !== 0 &&
        filterFoods.map(
          ({ strCategory }, index) =>
            index < 5 && (
              <button
                key={strCategory}
                type="button"
                data-testid={`${strCategory}-category-filter`}
                className="category-filter"
                onClick={() =>
                  getMealsByCategoryAPI(strCategory).then((resp) => {
                    if (foodsCategory.length) setFoodsCategory([]);
                    else setFoodsCategory([...resp.meals]);
                  })
                }
              >
                {strCategory}
              </button>
            ),
        )}
      {!foodsCategory.length && (
        <div className="recipes-container">
          {foodRecipes.map(
            ({ strMealThumb, strMeal }, index) =>
              index < 12 && <Card key={strMeal} index={index} url={strMealThumb} name={strMeal} />,
          )}
        </div>
      )}
      {foodsCategory.length && (
        <div className="recipes-container">
          {foodsCategory.map(
            ({ strMealThumb, strMeal }, index) =>
              index < 12 && <Card key={strMeal} index={index} url={strMealThumb} name={strMeal} />,
          )}
        </div>
      )}
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
