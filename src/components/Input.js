import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  searchTerm,
  setSearchTerm,
  typeSearch,
  setTypeSearch,
  verify,
  setFoodsCategory,
  setDrinksCategory,
  history,
}) => (
  <div>
    <input
      data-testid="search-input"
      placeholder="Buscar Receita"
      id="searchBar"
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <input
      data-testid="ingredient-search-radio"
      id="ingredient"
      type="radio"
      name="filter"
      onChange={(e) => setTypeSearch(e.target.id)}
    />
    <label htmlFor="ingredient">Ingrediente</label>
    <input
      data-testid="name-search-radio"
      id="name"
      type="radio"
      name="filter"
      onChange={(e) => setTypeSearch(e.target.id)}
    />
    <label htmlFor="name">Nome</label>
    <input
      data-testid="first-letter-search-radio"
      id="firstLetter"
      type="radio"
      name="filter"
      onChange={(e) => setTypeSearch(e.target.id)}
    />
    <label htmlFor="firstLetter">Primeira letra</label>
    <button
      data-testid="exec-search-btn"
      type="button"
      onClick={() => verify(searchTerm, typeSearch, setFoodsCategory, setDrinksCategory, history)}
    >
      Buscar
    </button>
  </div>
);

Input.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  typeSearch: PropTypes.string.isRequired,
  setTypeSearch: PropTypes.func.isRequired,
  verify: PropTypes.func.isRequired,
};

export default Input;
