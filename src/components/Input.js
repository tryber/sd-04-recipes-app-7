import React from 'react';

export default function Input({
  searchTerm,
  setSearchTerm,
  typeSearch,
  setTypeSearch,
  verify,
  setFoodsCategory,
}) {
  return (
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
        checked
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
        onClick={() => verify(searchTerm, typeSearch, setFoodsCategory)}
      >
        Buscar
      </button>
      {/* <input
        data-testid="search-input"
        placeholder="Buscar Receita"
        id="searchBar"
        type="text"
        onChange={attributes.setText}
      />
      <input
        data-testid="ingredient-search-radio"
        id="ingredient"
        type="radio"
        name="filter"
        onChange={attributes.radioOption}
      />
      <label htmlFor="ingredient">Ingrediente</label>
      <input
        data-testid="name-search-radio"
        id="name"
        type="radio"
        name="filter"
        onChange={attributes.radioOption}
      />
      <label htmlFor="name">Nome</label>
      <input
        data-testid="first-letter-search-radio"
        id="firstLetter"
        type="radio"
        name="filter"
        onChange={attributes.radioOption}
      />
      <label htmlFor="firstLetter">Primeira letra</label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={attributes.onClick}
      >
        Buscar
      </button> */}
    </div>
  );
}
