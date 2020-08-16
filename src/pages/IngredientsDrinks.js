import React, { useState, useEffect } from 'react';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import { ingredientsListD } from '../services';

const IngredientsDrinks = () => {
  const [teste, setTeste] = useState([]);

  useEffect(() => {
    ingredientsListD().then((data) => setTeste([...data.drinks]));
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {teste.map((ings, index) => {
        if (index < 12)
          return (
            <button
              data-testid={`${index}-ingredient-card`}
              key={ings.strIngredient1}
              onClick={() =>
                (window.location = `/bebidas/${ings.strIngredient1}`)
              }
            >
              <img
                data-testid={`${index}-card-img`}
                src={`https://www.thecocktaildb.com/images/ingredients/${ings.strIngredient1}-Small.png`}
                alt={ings.strIngredient1}
              />
              <span data-testid={`${index}-card-name`}>
                {ings.strIngredient1}
              </span>
            </button>
          );
        return null;
      })}
      <BottomBar />
    </div>
  );
};

export default IngredientsDrinks;
