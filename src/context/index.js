import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [searchbar, setSearchbar] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const context = {
    title,
    searchbar,
    userEmail,
    userPassword,
    setTitle,
    setSearchbar,
    setUserEmail,
    setUserPassword,
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

RecipesContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RecipesContext, RecipesProvider as Provider };
