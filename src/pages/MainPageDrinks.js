import React, { useContext, useState } from 'react';
import { RecipesContext } from '../context';

import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
// import Card from '../components/Card';
import LoadCards from '../components/LoadCards';

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
                className="category-filter"
                onClick={() =>
                  getCocktailByCategoryAPI(strCategory).then((resp) => {
                    return drinksCategory.length
                      ? setDrinksCategory([])
                      : setDrinksCategory([...resp.drinks]);
                  })
                }
              >
                {strCategory}
              </button>
            ),
        )}
      <LoadCards
        flag="drinks"
        category={drinksCategory}
        recipes={drinkRecipes}
      />
      <LoadCards
        flag="drinks"
        category={drinksCategory}
        recipes={drinkRecipes}
      />
      <BottomBar />
    </div>
  );
};

export default MainPageDrinks;
