import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import Card from '../components/Card';

const MainPageDrinks = () => {
  const { filterDrinks, drinkRecipes } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      {filterDrinks.length !== 0 &&
        filterDrinks.map(({ strCategory }, index) =>
          index < 5 ? (
            <button key={strCategory} type="button" data-testid={`${strCategory}-category-filter`}>
              {strCategory}
            </button>
          ) : null,
        )}
      {drinkRecipes.map(
        ({ strDrinkThumb, strDrink }, index) =>
          index < 12 && <Card key={strDrink} index={index} url={strDrinkThumb} name={strDrink} />,
      )}
      <BottomBar />
    </div>
  );
};

export default MainPageDrinks;
