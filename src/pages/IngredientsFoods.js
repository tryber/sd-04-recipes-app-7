import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import { ingredientsListF, getMealByIngredient } from '../services';

const IngredientsFoods = () => {
  const [foodNames, setFoodNames] = useState([]);
  const { setFoodsCategory } = useContext(RecipesContext);

  useEffect(() => {
    ingredientsListF().then((data) => setFoodNames([...data.meals]));
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" visible={false} />
      {foodNames.slice(0, 12).map((ings, index) => (
        <Link
          to="/comidas"
          data-testid={`${index}-ingredient-card`}
          key={ings.strIngredient}
          onClick={() => {
            getMealByIngredient(ings.strIngredient).then((data) =>
              setFoodsCategory(data.meals),
            );
          }}
        >
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.themealdb.com/images/ingredients/${ings.strIngredient}-Small.png`}
            alt={ings.strIngredient}
          />
          <span data-testid={`${index}-card-name`}>{ings.strIngredient}</span>
        </Link>
      ))}
      <BottomBar />
    </div>
  );
};

export default IngredientsFoods;
