import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';

const MainPageFoods = () => {
  const { filterFoods } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      {filterFoods.length !== 0 &&
        filterFoods.map(({ strCategory }, index) =>
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

export default MainPageFoods;
