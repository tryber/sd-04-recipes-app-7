import React from 'react';
import PropTypes from 'prop-types';

import Radio from './Radio';

import './styles.css';

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
  <div className="searchBar-container">
    <input
      className="searchBar-input"
      data-testid="search-input"
      placeholder="Buscar Receita"
      id="searchBar"
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Radio
      testid="ingredient-search-radio"
      id="ingredient"
      search={setTypeSearch}
      label="Ingrediente"
    />
    <Radio
      testid="name-search-radio"
      id="name"
      search={setTypeSearch}
      label="Nome"
    />
    <Radio
      testid="first-letter-search-radio"
      id="firstLetter"
      search={setTypeSearch}
      label="Primeira letra"
    />
    <button
      className="searchBar-button"
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
  setFoodsCategory: PropTypes.func.isRequired,
  setDrinksCategory: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default Input;
