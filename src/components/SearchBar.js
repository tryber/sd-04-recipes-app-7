import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  getFilterByIngredient,
  getMealByNameAPI,
  getFilterByFirstLetter,
} from '../services';
import Input from './Input';

let option = '';
let data = '';
const divs = document.querySelectorAll('.meals');

const radioOption = (opt) => {
  option = opt;
};

const filters = (filter) =>
  filter.slice(0, 12).map((cards, index) => {
    const headerDiv = document.querySelector('#header');
    const div = document.createElement('div');
    div.setAttribute('class', 'meals');
    div.setAttribute('key', `${cards.strMeal}`);
    div.setAttribute('data-testid', `${index}-recipe-card`);
    headerDiv.appendChild(div);
    const img = document.createElement('IMG');
    img.setAttribute('style', 'width: 100px;');
    img.setAttribute('data-testid', `${index}-card-img`);
    img.src = `${cards.strMealThumb}`;
    img.alt = `${cards.strMeal}`;
    const p = document.createElement('P');
    p.setAttribute('data-testid', `${index}-card-name`);
    const mealsName = document.createTextNode(`${cards.strMeal}`);
    p.appendChild(mealsName);
    div.appendChild(img);
    return div.appendChild(p);
  });

let condicionals = (text) => {
  if (option === 'ingredient') {
    data = getFilterByIngredient(text);
  }
  if (option === 'name') {
    data = getMealByNameAPI(text);
  }
  if (option === 'firstLetter') {
    if (text.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    data = getFilterByFirstLetter(text[0]);
  }
};

const onClick = (text, history) => {
  if (divs) {
    divs.forEach((item) => item.remove());
  }
  condicionals(text);
  return data.then(async (meal) => {
    if (meal.meals === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    if (meal.meals.length === 1) {
      return history.push(`/comidas/${meal.meals[0].idMeal}`);
    }
    return filters(await meal.meals);
  });
};

export default function SearchBar() {
  const history = useHistory();
  const [text, setText] = useState('');
  return (
    <Input
      onClick={() => onClick(text, history)}
      setText={(e) => setText(e.target.value)}
      radioOption={(e) => radioOption(e.target.id)}
    />
  );
}
