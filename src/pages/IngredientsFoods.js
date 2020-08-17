import React, { useState, useEffect, useContext } from 'react';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import { ingredientsListF, getMealByIngredient } from '../services';

const IngredientsFoods = () => {
  const [teste, setTeste] = useState([]);
  const [ingred, setIngred] = useState([]);
  const { setFoodsCategory } = useContext(RecipesContext);

  useEffect(() => {
    ingredientsListF().then((data) => setTeste([...data.meals]));
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {teste.slice(1, 12).map((ings, index) => {
        <button
          data-testid={`${index}-ingredient-card`}
          key={ings.strIngredient}
          onClick={() => {
            getMealByIngredient(ings.strIngredient).then((data) =>
              setIngred(data.meals),
            );
            setFoodsCategory([ingred])(
              (window.location = `/comidas/${ings.strIngredient}`),
            );
          }}
        >
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.themealdb.com/images/ingredients/${ings.strIngredient}-Small.png`}
            alt={ings.strIngredient}
          />
          <span data-testid={`${index}-card-name`}>{ings.strIngredient}</span>
        </button>;
        return null;
      })}
      <BottomBar />
    </div>
  );
};

export default IngredientsFoods;
