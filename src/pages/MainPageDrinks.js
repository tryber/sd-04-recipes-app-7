import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';

import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import LoadCards from '../components/LoadCards';
import Button from '../components/Button';

const MainPageDrinks = () => {
  const { filterDrinks, drinkRecipes } = useContext(RecipesContext);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [drinkKey, setDrinkKey] = useState('');
  return (
    <div>
      <Header title="Bebidas" visible />
      <div className="category-filter-container">
        <button
          type="button"
          data-testid="All-category-filter"
          className="category-filter"
          onClick={() => setDrinksCategory([])}
        >
          All
        </button>
        {filterDrinks.length !== 0 &&
          filterDrinks.map(
            ({ strCategory }, index) =>
              index < 5 && (
                <Button
                  key={strCategory}
                  strCategory={strCategory}
                  idKey={drinkKey}
                  setIdKey={setDrinkKey}
                  category={drinksCategory}
                  setCategory={setDrinksCategory}
                  flag="cocktails"
                />
              ),
          )}
      </div>
      <LoadCards flag="drinks" category={drinksCategory} recipes={drinkRecipes} />
      <BottomBar />
    </div>
  );
};

export default MainPageDrinks;
