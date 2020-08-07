import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
// import Card from '../components/Card';
import LoadCards from '../components/LoadCards';

import { getMealsByCategoryAPI } from '../services';

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
      <LoadCards
        flag="foods"
        category={foodsCategory}
        recipes={foodRecipes}
      />
      <LoadCards
        flag="foods"
        category={foodsCategory}
        recipes={foodRecipes}
      />
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
