import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import { ingredientsListD, getCocktailByIngredient } from '../services';

const IngredientsDrinks = () => {
  const [drinkNames, setDrinkNames] = useState([]);
  const { setDrinksCategory } = useContext(RecipesContext);

  useEffect(() => {
    ingredientsListD().then((data) => setDrinkNames([...data.drinks]));
  }, []);
  return (
    <div>
      <Header title="Explorar Ingredientes" visible={false} />
      {drinkNames.slice(0, 12).map((ings, index) => (
        <Link
          to="/bebidas"
          data-testid={`${index}-ingredient-card`}
          key={ings.strIngredient1}
          onClick={() => {
            getCocktailByIngredient(ings.strIngredient1).then((data) =>
              setDrinksCategory(data.drinks)
            );
          }}
        >
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.thecocktaildb.com/images/ingredients/${ings.strIngredient1}-Small.png`}
            alt={ings.strIngredient}
          />
          <span data-testid={`${index}-card-name`}>{ings.strIngredient1}</span>
        </Link>
      ))}
      <BottomBar />
    </div>
  );
};

export default IngredientsDrinks;
