import React, { useContext } from 'react';
import { RecipesContext } from '../context';

const SearchBar = () => {
  const { searcbar } = useContext(RecipesContext);

  if (searcbar) {
    return (
      <div>
        <input data-testid="search-input" type="text" />
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          value="Ingrediente"
          name="filter"
        />
        <label htmlFor="ingredient">Ingrediente</label>
        <input
          data-testid="name-search-radio"
          type="radio"
          value="Nome"
          name="filter"
        />
        <label htmlFor="name">Nome</label>
        <input
          data-testid="name-search-radio"
          type="radio"
          value="Nome"
          name="filter"
        />
        <label htmlFor="firstLetter">Primeira letra</label>
        <button data-testid="exec-search-btn" type="button">
          Buscar
        </button>
      </div>
    );
  }

  return null;
};

export default SearchBar;
