import React, { useState, createElement, createContext } from 'react';
import { Redirect } from 'react-router';
import {
    getFilterByIngredient,
    getMealByNameAPI,
    getFilterByFirstLetter,
} from '../services';
import Input from './Input';

let filter = ''

const radioOption = (option, choice) => {
    if (option === 'ingredient') getFilterByIngredient(choice).then((meal) => filter = meal.meals);
}

const onClick = () => {
    const headerDiv = document.querySelector("#header");
    filter.slice(0, 12).map((cards, index) => {
        const div = document.createElement('div');
        div.setAttribute('key', `${cards.strMeal}`);
        div.setAttribute('data-testid', `${index}-card-img`)
        headerDiv.appendChild(div);
        const img = document.createElement('IMG');
        img.src = `${cards.strMealThumb}`
        img.alt = `${cards.strMeal}`
        const p = document.createElement('P');
        const mealsName = document.createTextNode(`${cards.strMeal}`);
        p.appendChild(mealsName)
        div.appendChild(img);
        div.appendChild(p);
    })
}

export default function SearchBar() {
    const [text, setText] = useState('');
    return (
        <div>
            <Input
                onClick={onClick}
                setText={(e) => setText(e.target.value)}
                radioOption={(e) => radioOption(e.target.id, text)}
            />
        </div>
    )
}

// const radioOption = (value, selection, setSelection) => {
//   if (selection.length >= 1) {
//     if (!value.includes('ingredient' || 'name' || 'firstLetter'))
//       setSelection(null);
//     else if (value.includes('ingredient'))
//       getFilterByIngredient(selection).then((data) => setSelection(data.meals));
//     else if (value.includes('name'))
//       getMealByNameAPI(selection).then((data) => setSelection(data.meals));
//     else if (value.includes('firstLetter')) {
//       if (selection.length > 1) {
//         alert('Sua busca deve conter somente 1 (um) caracter');
//       getFilterByFirstLetter(selection[0]).then((data) => setSelection(data.meals));
//     }
//     } else setSelection(null);
//   } else alert('Escolha um ingrediente');
// };

// const SearchBar = () => {
//   const [selection, setSelection] = useState('');

//   const setText = (event) => {
//     setSelection(event);
//   };

//   const onClick = () => {
//     document.querySelector('#searchBar').value = '';
//     if (document.querySelector('ul')) document.querySelector('ul').remove();
//     const mainPage = document.querySelector('#root');
//     const list = document.createElement('UL');
//     if (selection === null || selection.length === 0) {
//       alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
//       return setSelection('');
//     }
//     if (selection.length === 1 && <Redirect to="/comidas/{id-da-receita}" />);
//     if (selection.length > 1) {
//       selection.slice(0, 12).map((item) => {
//         list.setAttribute('key', `${item.strMeal}`);
//         mainPage.appendChild(list);
//         const mealList = document.createElement('LI');
//         const meal = document.createTextNode(`${item.strMeal}`);
//         mealList.appendChild(meal);
//         return list.appendChild(mealList);
//       });
//     }
//     return setSelection('');
//   };
//   return (
//     <div>
//       <input
//         data-testid="search-input"
//         placeholder="Buscar Receita"
//         id="searchBar"
//         type="text"
//         onChange={(event) => setText(event.target.value)}
//       />
//       <input
//         data-testid="ingredient-search-radio"
//         id="ingredient"
//         type="radio"
//         name="filter"
//         onChange={() => radioOption('ingredient', selection, setSelection)}
//       />
//       <label htmlFor="ingredient">Ingrediente</label>
//       <input
//         data-testid="name-search-radio"
//         id="name"
//         type="radio"
//         name="filter"
//         onChange={() => radioOption('name', selection, setSelection)}
//       />
//       <label htmlFor="name">Nome</label>
//       <input
//         data-testid="first-letter-search-radio"
//         id="firstLetter"
//         type="radio"
//         name="filter"
//         onChange={() => radioOption('firstLetter', selection, setSelection)}
//       />
//       <label htmlFor="firstLetter">Primeira letra</label>
//       <button data-testid="exec-search-btn" type="button" onClick={onClick}>
//         Buscar
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
