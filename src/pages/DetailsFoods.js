import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../context';
import { getMealById, getCocktailByNameAPI } from '../services';
import Ingredients from '../components/Ingredients';
import DetailsHeader from '../components/DetailsHeader';
import Instructions from '../components/Instructions';
import Carousel from '../components/Carousel';
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

const handleButton = (history) => history.push(`${window.location.pathname}/in-progress`);

const DetailsFoods = () => {
  const { foodId, setFoodId } = useContext(RecipesContext);
  const [recommendedDrinks, setRecommendedDrinks] = useState([]);

  useEffect(() => {
    getCocktailByNameAPI().then((resp) => setRecommendedDrinks([...resp.drinks]));
  }, []);

  const url = takeURL();
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
    const ingredients = catchMaterials(foodId.meals, 'strIngredient');
    const measures = catchMaterials(foodId.meals, 'strMeasure');
    const fav = objFavorite(foodId.meals[0]);

    return (
      <div>
        <DetailsHeader img={img} name={name} category={category} favorite={fav} />
        <h3>Ingredients</h3>
        <Ingredients list="false" ingredients={ingredients} measures={measures} />
        <h3>Instructions</h3>
        <Instructions text={foodId.meals[0].strInstructions} />
        <h3>Video</h3>
        <div data-testid="video">
          {/* <source src={foodId.meals[0].strYoutube} type="video/mp4" /> */}
        </div>
        <h3>Recomendadas</h3>
        <Carousel recommendeds={recommendedDrinks} flag="bebidas" />
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

export default DetailsFoods;
