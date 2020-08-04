import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [title, setTitle] = useState('');

  const context = {
    title,
    setTitle,    
  };
  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

RecipesContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RecipesContext, RecipesProvider as Provider };
