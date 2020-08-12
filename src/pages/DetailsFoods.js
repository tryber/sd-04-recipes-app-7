import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import DetailsHeader from '../components/DetailsHeader';
import Instructions from '../components/Instructions';
import { getMealById } from '../services/index';
import { RecipesContext } from '../context';
import './CSS/Details.css';

const takeURL = () => {
  const url = window.location.pathname;
  const arrayUrl = url.split('/');
  return arrayUrl;
};

const catchMaterials = (data, key) => {
  const details = [];
  let counter = 1;
  Object.keys(data[0]).forEach((info) => {
    const comparation = `${key}${counter}`;
    if (info === comparation && data[0][info] !== '') {
      counter += 1;
      details.push(data[0][info]);
    }
  });
  //  console.log(details);
  return details;
};

const objFavorite = (data) => {
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

const handleButton = (boolean) => {
  console.log('ok')
  return !boolean;
};

const DetailsFoods = () => {
  const {
    foodId,
    setFoodId,
  } = useContext(RecipesContext);

  const url = takeURL();
  let img = '';
  let name = '';
  let category = '';
  if (foodId.length === 0 || foodId.meals[0].idMeal !== url[2]) {
    getMealById(url[2]).then((resp) => setFoodId(resp));
  }

  if (foodId.length !== 0) {
    img = foodId.meals[0].strMealThumb;
    name = foodId.meals[0].strMeal;
    category = foodId.meals[0].strCategory;
    const ingredients = catchMaterials(foodId.meals, 'strIngredient');
    const measures = catchMaterials(foodId.meals, 'strMeasure');
    const fav = objFavorite(foodId.meals[0]);
    let pageChange = false;

    return (
      <div>
        <DetailsHeader img={img} name={name} category={category} favorite={fav} />
        <h3>Ingredients</h3>
        <Ingredients list={false} ingredients={ingredients} measures={measures} />
        <h3>Instructions</h3>
        <Instructions text={foodId.meals[0].strInstructions} />
        <h3>Video</h3>
        <h3>Recomendadas</h3>
        <br />
        <br />
        {console.log(pageChange)}
        <button
          data-testid="start-recipe-btn"
          className="btn-init"
          onClick={() => pageChange = handleButton(pageChange)}
        >
          Iniciar Receita
        </button>
      </div>
    );
  }
  return <div />;
};

export default DetailsFoods;
