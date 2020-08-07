import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';

import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import LoadCards from '../components/LoadCards';

import { getCocktailByCategoryAPI } from '../services';

const MainPageDrinks = () => {
  const { filterDrinks, drinkRecipes } = useContext(RecipesContext);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [drinkKey, setDrinkKey] = useState('');
  return (
    <div>
      <Header title="Bebidas" visible />
      <div className="category-filter-container">
        {filterDrinks.length !== 0 &&
          filterDrinks.map(
            ({ strCategory }, index) =>
              index < 5 && (
                <button
                  key={strCategory}
                  type="button"
                  data-testid={`${strCategory}-category-filter`}
                  className="category-filter"
                  onClick={() => {
                    if (drinkKey !== strCategory) {
                      setDrinkKey(strCategory);
                      getCocktailByCategoryAPI(strCategory).then((resp) =>
                        setDrinksCategory([...resp.drinks]),
                      );
                    } else {
                      getCocktailByCategoryAPI(strCategory).then((resp) => {
                        if (drinksCategory.length) setDrinksCategory([]);
                        else setDrinksCategory([...resp.drinks]);
                      });
                    }
                  }}
                >
                  {strCategory}
                </button>
              ),
          )}
      </div>
      <LoadCards flag="drinks" category={drinksCategory} recipes={drinkRecipes} />
      <BottomBar />
    </div>
  );
};

export default MainPageDrinks;
