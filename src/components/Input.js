import React from 'react';

export default function SearchBar(attributes) {
    return (
        <div>
            <input
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
            <button data-testid="exec-search-btn" type="button" onClick={attributes.onClick}>
                Buscar
       </button>
        </div>
    )
};
