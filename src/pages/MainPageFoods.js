import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';

import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import LoadCards from '../components/LoadCards';
import Button from '../components/Button';

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
                <Button
                  key={strCategory}
                  strCategory={strCategory}
                  idKey={foodKey}
                  setIdKey={setFoodKey}
                  category={foodsCategory}
                  setCategory={setFoodsCategory}
                  flag="meals"
                />
              ),
          )}
      </div>
      <LoadCards flag="foods" category={foodsCategory} recipes={foodRecipes} />
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
