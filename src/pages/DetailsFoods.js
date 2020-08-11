import React from 'react';
import Ingredients from '../components/Ingredients';
import DetailsHeader from '../components/DetailsHeader';

const TestChamada = {
  meals: [
    {
      idMeal: '52882',
      strMeal: 'Three Fish Pie',
      strDrinkAlternate: null,
      strCategory: 'Seafood',
      strArea: 'British',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
      strTags: 'Fish,Seafood,Dairy,Pie',
      strYoutube: 'https://www.youtube.com/watch?v=Ds1Jb8H5Sg8',
      strIngredient1: 'Potatoes',
      strIngredient2: 'Butter',
      strIngredient3: 'Milk',
      strIngredient4: 'Gruy\u00e8re',
      strIngredient5: 'Butter',
      strIngredient6: 'Leek',
      strIngredient7: 'Plain Flour',
      strIngredient8: 'White Wine',
      strIngredient9: 'Milk',
      strIngredient10: 'Parsley',
      strIngredient11: 'Salmon',
      strIngredient12: 'Haddock',
      strIngredient13: 'Smoked Haddock',
      strIngredient14: 'Eggs',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: '1kg',
      strMeasure2: 'Knob',
      strMeasure3: 'Dash',
      strMeasure4: '50g',
      strMeasure5: '75g',
      strMeasure6: '2 sliced',
      strMeasure7: '75g',
      strMeasure8: '150ml',
      strMeasure9: '568ml',
      strMeasure10: '2 tbs chopped',
      strMeasure11: '250g',
      strMeasure12: '250g',
      strMeasure13: '250g',
      strMeasure14: '6',
      strMeasure15: '',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strSource: 'https://www.bbc.co.uk/food/recipes/three_fish_pie_58875',
      dateModified: null,
    },
  ],
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

const DetailsFoods = () => {
  const img = TestChamada.meals[0].strMealThumb;
  const name = TestChamada.meals[0].strMeal;
  const category = TestChamada.meals[0].strCategory;
  const ingredients = catchMaterials(TestChamada.meals, 'strIngredient');
  const measures = catchMaterials(TestChamada.meals, 'strMeasure');
  const fav = objFavorite(TestChamada.meals[0]);

  return (
    <div>
      <DetailsHeader img={img} name={name} category={category} favorite={fav} />
      <h3>Ingredients</h3>
      <Ingredients list={false} ingredients={ingredients} measures={measures} />
    </div>
  );
};

export default DetailsFoods;
