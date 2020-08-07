import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';

import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import LoadCards from '../components/LoadCards';

import { getMealsByCategoryAPI } from '../services';

const MainPageFoods = () => {
  const { filterFoods, foodRecipes } = useContext(RecipesContext);
  const [foodsCategory, setFoodsCategory] = useState([]);
  const [foodKey, setFoodKey] = useState('');
  return (
    <div>
      <Header title="Comidas" visible />
      <div className="category-filter-container">
        {filterFoods.length !== 0 &&
          filterFoods.map(
            ({ strCategory }, index) =>
              index < 5 && (
                <button
                  key={strCategory}
                  type="button"
                  data-testid={`${strCategory}-category-filter`}
                  className="category-filter"
                  onClick={() => {
                    if (foodKey !== strCategory) {
                      setFoodKey(strCategory);
                      getMealsByCategoryAPI(strCategory).then((resp) =>
                        setFoodsCategory([...resp.meals]),
                      );
                    } else {
                      getMealsByCategoryAPI(strCategory).then((resp) => {
                        if (foodsCategory.length) setFoodsCategory([]);
                        else setFoodsCategory([...resp.meals]);
                      });
                    }
                  }}
                >
                  {strCategory}
                </button>
              ),
          )}
      </div>
      <LoadCards flag="foods" category={foodsCategory} recipes={foodRecipes} />
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
