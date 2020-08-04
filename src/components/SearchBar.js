import React, { useState } from 'react';
import {
  getFilterByIngredient,
  getMealByNameAPI,
  getFilterByFirstLetter,
} from '../services';

const radioOption = (value, selection, setSelection) => {
  if (selection.length >= 1) {
    switch (value) {
      case 'ingredient':
        getFilterByIngredient(selection).then((data) => setSelection(data.meals),
        ); break;
      case 'name':
        getMealByNameAPI(selection).then((data) => setSelection(data.meals)); break;
      case value:
        getFilterByFirstLetter(selection).then((data) => setSelection(data.meals),
        ); break;
      default:
        console.log('');
    }
  } else {
    console.log('Escolha um ingrediente');
  }
};

const SearchBar = () => {
  const [selection, setSelection] = useState('');

  const setText = (event) => {
    setSelection(event);
  };

  const onClick = () => {
    if (selection === null) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    if (selection.length === 1) {
      let mainPage = document.querySelector('#root');
      selection.map((item) => {
      let list = document.createElement('UL');
      list.setAttribute('key', `${item.strMeal}`);
      mainPage.appendChild(list)
      let mealList = document.createElement('LI');
      let meal = document.createTextNode(`${item.strMeal}`);
      mealList.appendChild(meal);
      list.appendChild(mealList);
    });
    };
    console.log('a lot');
  };
  return (
    <div>
      <input
        data-testid="search-input"
        placeholder="Buscar Receita"
        id="searchBar"
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      <input
        data-testid="ingredient-search-radio"
        id="ingredient"
        type="radio"
        name="filter"
        onChange={() => radioOption('ingredient', selection, setSelection)}
      />
      <label htmlFor="ingredient">Ingrediente</label>
      <input
        data-testid="name-search-radio"
        id="name"
        type="radio"
        name="filter"
        onChange={() => radioOption('name', selection, setSelection)}
      />
      <label htmlFor="name">Nome</label>
      <input
        data-testid="first-letter-search-radio" id="firstLetter"
        type="radio" name="filter"
        onChange={() => radioOption('firstLetter', selection, setSelection)}
      />
      <label htmlFor="firstLetter">Primeira letra</label>
      <button data-testid="exec-search-btn" type="button" onClick={onClick}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;