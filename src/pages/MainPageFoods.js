import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import Card from '../components/Card';

const aux = (values) => values.reduce((res, nxt) => res + nxt);

const MainPageFoods = () => {
  const { filterFoods, foodRecipes, toggleFoods, setToggleFoods } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      {filterFoods.length !== 0 &&
        filterFoods.map(({ strCategory }, index) =>
          index < 5 ? (
            <button
              key={strCategory}
              type="button"
              data-testid={`${strCategory}-category-filter`}
              onClick={() => setToggleFoods({ ...toggleFoods, [strCategory]: !toggleFoods[strCategory] })}
            >
              {strCategory}
            </button>
          ) : null,
        )}
      <div className="recipes-container">
        {foodRecipes.map(
          ({ strMealThumb, strMeal }, index) =>
            index < 12 && <Card key={strMeal} index={index} url={strMealThumb} name={strMeal} />,
        )}
      </div>
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
