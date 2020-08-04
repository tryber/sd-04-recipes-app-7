import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';

const MainPageDrinks = () => {
  const { filterDrinks } = useContext(RecipesContext);
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
      <BottomBar />
    </div>
  );
};

export default MainPageDrinks;
