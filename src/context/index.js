import React, { createContext, useState } from 'react';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const contextValue = {};
  return <RecipesContext.Provider value={contextValue}>{children}</RecipesContext.Provider>;
};

export { RecipesContext, RecipesProvider as Provider };
