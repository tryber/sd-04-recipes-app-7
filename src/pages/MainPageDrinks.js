import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import Card from '../components/Card';

import { getCocktailByCategoryAPI } from '../services';

const MainPageDrinks = () => {
  const { filterDrinks, drinkRecipes } = useContext(RecipesContext);
  const [drinksCategory, setDrinksCategory] = useState([]);
  return (
    <div>
      <Header />
      {filterDrinks.length !== 0 &&
        filterDrinks.map(
          ({ strCategory }, index) =>
            index < 5 && (
              <button
                key={strCategory}
                type="button"
                data-testid={`${strCategory}-category-filter`}
                onClick={() =>
                  getCocktailByCategoryAPI(strCategory).then((resp) =>
                    drinksCategory.length
                      ? setDrinksCategory([])
                      : setDrinksCategory([...resp.drinks]),
                  )
                }
              >
                {strCategory}
              </button>
            ),
        )}
      {!drinksCategory.length && (
        <div className="recipes-container">
          {drinkRecipes.map(
            ({ strDrinkThumb, strDrink }, index) =>
              index < 12 && (
                <Card key={strDrink} index={index} url={strDrinkThumb} name={strDrink} />
              ),
          )}
        </div>
      )}
      {drinksCategory.length && (
        <div className="recipes-container">
          {drinksCategory.map(
            ({ strDrinkThumb, strDrink }, index) =>
              index < 12 && (
                <Card key={strDrink} index={index} url={strDrinkThumb} name={strDrink} />
              ),
          )}
        </div>
      )}
      <BottomBar />
    </div>
  );
};

export default MainPageDrinks;
