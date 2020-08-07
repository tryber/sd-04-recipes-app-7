import React, { useState } from 'react';
import { Redirect } from 'react-router';
import {
  getFilterByIngredient,
  getMealByNameAPI,
  getFilterByFirstLetter,
} from '../services';
import Input from './Input';

let option = '';
let choice = '';
const aler = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

const radioOption = (opt, joy) => {
  opt === 'firstLetter' && joy.length > 1
    ? alert('Sua busca deve conter somente 1 (um) caracter')
    : (option = opt);
  choice = joy;
};

const filters = (filter) =>
  filter.map((cards, index) => {
    const headerDiv = document.querySelector('#header');
    const div = document.createElement('div');
    div.setAttribute('class', 'teste');
    div.setAttribute('key', `${cards.strMeal}`);
    div.setAttribute('data-testid', `${index}-card-img`);
    headerDiv.appendChild(div);
    const img = document.createElement('IMG');
    img.src = `${cards.strMealThumb}`;
    img.alt = `${cards.strMeal}`;
    const p = document.createElement('P');
    const mealsName = document.createTextNode(`${cards.strMeal}`);
    p.appendChild(mealsName);
    div.appendChild(img);
    return div.appendChild(p);
  });

const onClick = () => {
  if (choice === null || choice.length === 0) alert(aler);
  if (document.querySelectorAll('.teste'))
    document.querySelectorAll('.teste').forEach((item) => item.remove());
  if (option === 'ingredient')
    getFilterByIngredient(choice).then(async (meal) => {
      if (meal.meals === null || meal.meals.length === 0) alert(aler);
      if (meal.meals.length === 1) {
        let id = `/comidas/${meal.meals.idMeal}`;
        return <Redirect to={id} />;
      }
      filters(await meal.meals);
    });
  if (option === 'name')
    getMealByNameAPI(choice).then(async (meal) => {
      if (meal.meals === null || meal.meals.length === 0) alert(aler);
      if (meal.meals.length === 1) {
        let id = `/comidas/${meal.meals.idMeal}`;
        return <Redirect to={id} />;
      }
      filters(await meal.meals);
    });
  if (option === 'firstLetter')
    getFilterByFirstLetter(choice[0]).then(async (meal) => {
      if (meal.meals === null || meal.meals.length === 0) alert(aler);
      if (meal.meals.length === 1) {
        let id = `/comidas/${meal.meals.idMeal}`;
        return <Redirect to={id} />;
      }
      filters(await meal.meals);
    });
  option = '';
  choice = '';
};

export default function SearchBar() {
  const [text, setText] = useState('');
  return (
    <Input
      onClick={onClick}
      setText={(e) => setText(e.target.value)}
      radioOption={(e) => radioOption(e.target.id, text)}
    />
  );
}
