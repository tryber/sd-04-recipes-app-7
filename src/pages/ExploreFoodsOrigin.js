import React, { useState, useEffect, useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import { mealsAreas, mealsByAreas } from '../services';
import LoadCards from '../components/LoadCards';

const onChange = (value, setFoodsCategory) => {
  if (value === 'All') {
    setFoodsCategory([]);
  } else {
    mealsByAreas(value).then((result) => setFoodsCategory([...result.meals]));
  }
  return null;
};

const ExploreFoodsOrigin = () => {
  const {
    foodRecipes,
    foodsCategory,
    setFoodsCategory,
  } = useContext(RecipesContext);
  const [areas, setAreas] = useState(['All']);

  useEffect(() => {
    mealsAreas().then((data) => setAreas([...data.meals]));
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" visible />
      <div className="dropDown-container">
        <select
          data-testid="explore-by-area-dropdown"
          onChange={(e) =>
            onChange(
              e.target.value,
              setFoodsCategory,
            )
          }
        >
          <option data-testid="All-option">All</option>
          {areas.length &&
            areas.map(({ strArea }) => (
              <option key={`${strArea}`} data-testid={`${strArea}-option`}>
                {strArea}
              </option>
            ))}
        </select>
        <LoadCards
          flag="foods"
          category={foodsCategory}
          recipes={foodRecipes}
        />
      </div>
      <BottomBar />
    </div>
  );
};

export default ExploreFoodsOrigin;
