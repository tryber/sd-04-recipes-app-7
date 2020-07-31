import React, { createContext, /*  useState  */ } from 'react';
import PropTypes from 'prop-types';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const contextValue = {};
  return <RecipesContext.Provider value={contextValue}>{children}</RecipesContext.Provider>;
};

RecipesContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export { RecipesContext, RecipesProvider as Provider };
