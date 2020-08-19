import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipesContext } from '../../context';
import { verifyTextMeals, verifyTextCocktails } from '../../utils';
import Input from './components/Input';

const allowSearch = (text, radioValue) => !(radioValue === 'firstLetter' && text.length > 1);

const verifyPath = (text, radioValue, setFoodsCategory, setDrinksCategory, history) => {
  if (allowSearch(text, radioValue)) {
    if (window.location.pathname === '/comidas' && allowSearch(text, radioValue)) {
      verifyTextMeals(text, radioValue, setFoodsCategory, history);
    } else verifyTextCocktails(text, radioValue, setDrinksCategory, history);
  } else alert('Sua busca deve conter somente 1 (um) caracter');
};

const SearchBar = () => {
  const { setFoodsCategory, setDrinksCategory } = useContext(RecipesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeSearch, setTypeSearch] = useState('ingredient');
  const history = useHistory();
  return (
    <Input
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      typeSearch={typeSearch}
      setTypeSearch={setTypeSearch}
      verify={verifyPath}
      setFoodsCategory={setFoodsCategory}
      setDrinksCategory={setDrinksCategory}
      history={history}
    />
  );
};

export default SearchBar;
