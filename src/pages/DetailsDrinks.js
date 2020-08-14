import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCocktailById, getMealByNameAPI } from '../services';
import { RecipesContext } from '../context';
import Ingredients from '../components/Ingredients';
import DetailsHeader from '../components/DetailsHeader';
import Instructions from '../components/Instructions';
import Carousel from '../components/Carousel';

import './CSS/Details.css';

const takeURL = () => {
  const path = window.location.pathname;
  const arrayPath = path.split('/');
  return arrayPath;
};

const catchMaterials = (data, key) => {
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

const objFavorite = (data) => {
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

const handleButton = (history) => history.push(`${window.location.pathname}/in-progress`);

const DetailsDrinks = () => {
  const { drinkId, setDrinkId } = useContext(RecipesContext);
  const [recommendedFoods, setRecommendedFoods] = useState([]);

  useEffect(() => getMealByNameAPI().then((resp) => setRecommendedFoods([...resp.meals])), []);

  const url = takeURL();
  let img = '';
  let name = '';
  let category = '';
  const history = useHistory();
  if (drinkId.length === 0 || drinkId.drinks[0].idDrink !== url[2]) {
    getCocktailById(url[2]).then((resp) => setDrinkId(resp));
  }

  if (drinkId.length !== 0) {
    img = drinkId.drinks[0].strDrinkThumb;
    name = drinkId.drinks[0].strDrink;
    category = drinkId.drinks[0].strAlcoholic;
    const ingredients = catchMaterials(drinkId.drinks, 'strIngredient');
    const measures = catchMaterials(drinkId.drinks, 'strMeasure');
    const fav = objFavorite(drinkId.drinks[0]);

    return (
      <div>
        <DetailsHeader img={img} name={name} category={category} favorite={fav} />
        <h3>Ingredients</h3>
        <Ingredients list={false} ingredients={ingredients} measures={measures} />
        <h3>Instructions</h3>
        <Instructions text={drinkId.drinks[0].strInstructions} />
        <h3>Video</h3>
        <h3>Recomendadas</h3>
        <Carousel recommendeds={recommendedFoods} flag="comidas" />
        <button
          data-testid="start-recipe-btn"
          className="btn-init"
          onClick={() => handleButton(history)}
        >
          Iniciar Receita
        </button>
      </div>
    );
  }
  return <div />;
};

export default DetailsDrinks;
