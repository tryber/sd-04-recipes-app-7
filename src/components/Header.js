import React, { useState } from 'react';
import {
  getFilterByIngredient,
  getMealByNameAPI,
  getFilterByFirstLetter,
} from '../services';

const Header = () => {
  const [selection, setSelection] = useState('');

  const setText = (event) => {
    setSelection(event);
  };

  const radioOption = (value) => {
    if (selection.length >= 1) {
      switch (value) {
        case 'ingredient':
          getFilterByIngredient(selection).then((data) =>
            setSelection(data.meals)
          );
          break;
        case 'name':
          getMealByNameAPI(selection).then((data) => setSelection(data.meals));
          break;
        case value:
          getFilterByFirstLetter(selection).then((data) =>
            setSelection(data.meals)
          );
          break;
        default:
          alert('');
      }
    } else {
      alert('Escolha um ingrediente');
    }
  };

  const onClick = () => {
    if (selection === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
      return
    }
    if (selection.length === 1) {
      alert('one')
    } else {
      alert('a lot')
    }
  };
  return (
    <div>
      <input
        id="searchBar"
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      <label htmlFor="searchBar" />
      <input
        id="ingredient"
        type="radio"
        name="filter"
        onChange={() => radioOption('ingredient')}
      />
      <label htmlFor="ingredient">Ingrediente</label>
      <input
        id="name"
        type="radio"
        name="filter"
        onChange={() => radioOption('name')}
      />
      <label htmlFor="name">Nome</label>
      <input
        id="firstLetter"
        type="radio"
        name="filter"
        onChange={() => radioOption('firstLetter')}
      />
      <label htmlFor="firstLetter">Primeira letra</label>
      <button type="button" onClick={onClick}>
        Buscar
      </button>
    </div>
  );
};

export default Header;
