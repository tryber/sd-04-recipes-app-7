import React, { useContext } from 'react';
import { RecipesContext } from '../context';

const SearchBar = () => {
  const { SearchBar } = useContext(RecipesContext)

  if (SearchBar) {

    return (
      <div>
        <input data-testid="search-input" type="text" />
        <input
          data-testid="ingredient-search-radio" 
          type="radio"
          value="Ingrediente"
          name="Ingrediente"
          />
        <label htmlFor="ingredient">Ingrediente</label>
        <input
          data-testid="name-search-radio"
          type="radio"
          value="Nome"
          name="Nome"
          />
        <label htmlFor="name">Nome</label>
        <input
          data-testid="name-search-radio"
          type="radio"
          value="Primeira-Letra"
          name="filter"
          />
        <label htmlFor="firstLetter">Primeira letra</label>
        <button data-testid="exec-search-btn">
          Buscar
        </button>
      </div>
    );
  }
};

export default SearchBar;
