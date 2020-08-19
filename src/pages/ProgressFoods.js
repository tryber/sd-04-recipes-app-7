import React, { useContext } from 'react';
import { RecipesContext } from '../context';
import { getMealById } from '../services';
import { useHistory } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import DetailsHeader from '../components/DetailsHeader';
import Instructions from '../components/Instructions';
import './CSS/Details.css';

const takeURl = () => {
  const url = window.location.pathname;
  const arrayUrl = url.split('/');
  return arrayUrl;
};

const catchMaterialS = (data, key) => {
  const details = [];
  let counter = 1;
  Object.keys(data[0]).forEach((info) => {
    const comparation = `${key}${counter}`;
    if (info === comparation && data[0][info] !== '') {
      counter += 1;
      details.push(data[0][info]);
    }
  });
  return details;
};

const objFavoritE = (data) => {
  const favorite = {
    id: data.idMeal,
    type: 'comida',
    area: data.strArea,
    category: data.strCategory,
    alcoholicOrNot: '',
    name: data.strMeal,
    image: data.strMealThumb,
  };
  return favorite;
};

const handleButton = (history) => history.push(`/receitas-feitas`);

const ProgressFoods = () => {
  const { foodId, setFoodId } = useContext(RecipesContext);
  const url = takeURl();
  let img = '';
  let name = '';
  let category = '';
  const history = useHistory();
  if (foodId.length === 0 || foodId.meals[0].idMeal !== url[2]) {
    getMealById(url[2]).then((resp) => setFoodId(resp));
  }

  if (foodId.length !== 0) {
    img = foodId.meals[0].strMealThumb;
    name = foodId.meals[0].strMeal;
    category = foodId.meals[0].strCategory;
    const ingredients = catchMaterialS(foodId.meals, 'strIngredient');
    const measures = catchMaterialS(foodId.meals, 'strMeasure');
    const fav = objFavoritE(foodId.meals[0]);

    return (
      <div>
        <DetailsHeader img={img} name={name} category={category} favorite={fav} />
        <h3>Ingredients</h3>
        <Ingredients list="true" ingredients={ingredients} measures={measures} />
        <h3>Instructions</h3>
        <Instructions text={foodId.meals[0].strInstructions} />
        <br />
        <br />
        <button
          data-testid="finish-recipe-btn"
          className="btn-init"
          onClick={() => handleButton(history)}
        >
          Finalizar Receita
        </button>
      </div>
    );
  }
  return <div />;
};

export default ProgressFoods;
