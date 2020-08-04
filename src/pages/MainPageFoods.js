import React, { useEffect, useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import { getFoodFiltersAPI } from '../services';

const MainPageFoods = () => {
  const { filterFoods, setFilterFoods } = useContext(RecipesContext);
  useEffect(() => {
    getFoodFiltersAPI()
    .then((resp) => setFilterFoods([...resp.meals]));
  }, []);
  return (
    <div>
      <Header />
      {filterFoods.length !== 0 && filterFoods.map(({ strCategory }, index) => {
        if (index < 5) return (
          <button
            type="button"
            data-testid={`${strCategory}-category-filter`}
          >
            {strCategory}
          </button>
        );
      })}
      <BottomBar />
    </div>
  );
};

export default MainPageFoods;
