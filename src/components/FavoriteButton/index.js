import React, { useContext } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { RecipesContext } from '../../context';

const FavoriteButton = (details) => {
  const { foodDetails } = useContext(RecipesContext);
  const saveFavorite = (recipe) => {
    const {
      idMeal: id,
      strCategory: category,
      strArea: area,
      strMeal: name,
      strMealThumb: image,
    } = recipe;
    const type = 'comida';
    const alcoholicOrNot = '';
  
    const currentFavoriteRecipes = localStorage.getItem('favoriteRecipes')
      ? JSON.parse(localStorage.getItem('favoriteRecipes'))
      : [];
  
    const favoriteRecipes = [
      ...currentFavoriteRecipes,
      { id, type, area, category, alcoholicOrNot, name, image },
    ];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }

  const { isFavorite, setIsFavorite } = useContext(RecipesContext);
  return (
    <div>
      <button 
        type="button"
        onClick={() => {
          saveFavorite(foodDetails);
          setIsFavorite(!isFavorite);
        }}
      >
        <img
          src={!isFavorite ? whiteHeartIcon : blackHeartIcon}
          alt="icon"
          data-testid="favorite-btn"
        />
      </button>
    </div>
  )
}

export default FavoriteButton;
