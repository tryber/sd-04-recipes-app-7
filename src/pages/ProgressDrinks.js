import React, { useContext } from 'react';
import { getCocktailById } from '../services';
import { RecipesContext } from '../context';
import Ingredients from '../components/Ingredients';
import DetailsHeader from '../components/DetailsHeader';
import Instructions from '../components/Instructions';
import './CSS/Details.css';

const takeUrl = () => {
  const pathUrl = window.location.pathname;
  const arrayPathUrl = pathUrl.split('/');
  return arrayPathUrl;
};

const catchMaterial = (data, key) => {
  const details = [];
  let counter = 1;
  Object.keys(data[0]).forEach((info) => {
    const comparation = `${key}${counter}`;
    if (info === comparation && data[0][info] !== null && data[0][info] !== '') {
      counter += 1;
      details.push(data[0][info]);
    }
  });
  return details;
};

const objFavorit = (data) => {
  const favorite = {
    id: data.idMeal,
    type: 'bebida',
    area: data.strArea,
    category: data.strCategory,
    alcoholicOrNot: data.strAlcoholic,
    name: data.strMeal,
    image: data.strMealThumb,
  };
  return favorite;
};

const handleButton = () => null;

const ProgressDrinks = () => {
  const { drinkId, setDrinkId } = useContext(RecipesContext);
  const url = takeUrl();
  let img = '';
  let name = '';
  let category = '';
  if (drinkId.length === 0 || drinkId.drinks[0].idDrink !== url[2]) {
    getCocktailById(url[2]).then((resp) => setDrinkId(resp));
  }

  if (drinkId.length !== 0) {
    img = drinkId.drinks[0].strDrinkThumb;
    name = drinkId.drinks[0].strDrink;
    category = drinkId.drinks[0].strAlcoholic;
    const ingredients = catchMaterial(drinkId.drinks, 'strIngredient');
    const measures = catchMaterial(drinkId.drinks, 'strMeasure');
    const fav = objFavorit(drinkId.drinks[0]);

    return (
      <div>
        <DetailsHeader img={img} name={name} category={category} favorite={fav} />
        <h3>Ingredients</h3>
        <Ingredients list="true" ingredients={ingredients} measures={measures} />
        <h3>Instructions</h3>
        <Instructions text={drinkId.drinks[0].strInstructions} />
        <br />
        <br />
        <button
          data-testid="finish-recipe-btn"
          className="btn-init"
          onClick={() => handleButton()}
        >
          Iniciar Receita
        </button>
      </div>
    );
  }
  return <div />;
};

export default ProgressDrinks;
