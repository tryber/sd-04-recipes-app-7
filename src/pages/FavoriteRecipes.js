import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButon from '../images/shareIcon.svg';
import FavoriteButon from '../images/blackHeartIcon.svg';
 
const createCards = (params, setUpdateUnfavorite) =>
  params.map(
    ({ id, type, area, category, alcoholicOrNot, name, image }, index) => {
      const path = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
      return (
        <div key={id}>
          <div>
            <Link to={path}>
              <img src={image} alt={name} data-testid={`${index}-horizontal-top-text`} />
            </Link>
          </div>
          <div>
            {type === 'comida' ? (
              <p data-testid={`${index}-horizontal-top-text`}>
                {area} - {category}
              </p>
            ) : (
              <p ata-testid={`${index}-horizontal-top-text`}>
                {alcoholicOrNot}
              </p>
            )}
            <Link to={path}>
              <p data-testid={`${index}-horizontal-share-btn`} path={path} />
            </Link>
            <button testid={`${index}-horizontal-share-btn`} path={path}>
              <img src={ShareButon} alt="Share Icon" />
            </button>
            <button
              id={id}
              handleElement={setUpdateUnfavorite}
              testid={`${index}-horizontal-favorite-btn`}
            >
              <img src={FavoriteButon} alt="Favorite Icon" />
            </button>
          </div>
        </div>
      );
    },
  );

const mountFavoriteList = (filter, favorites, setUpdateUnfavorite) => {
  let mountParams = [];
  if (favorites.length === 0) return <p>Sem receitas favoritas...</p>;
  if (filter === 'comida') {
    mountParams = favorites.filter((favorite) => favorite.type === 'bebida');
    return createCards(mountParams, setUpdateUnfavorite);
  }
  mountParams = favorites;
  return createCards(mountParams, setUpdateUnfavorite);
};

function FavoriteRecipes() {
  const [updateUnfavorite, setUpdateUnfavorite] = useState(false);
  const [filterRecipes, setFilterRecipes] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const getFavoritesAndSet = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    console.log(favoriteList);
    setFavorites([favoriteList]);
    setUpdateUnfavorite(false);
  };
  
  useEffect(() => {
    getFavoritesAndSet();
  }, [updateUnfavorite]);
  
  return (
    <div>
      <Header title="Receitas Favoritas" visible={false} />
      {/* Recipes buttons */}
      {favorites && favorites.length >= 1
        ? mountFavoriteList(filterRecipes, favorites, setUpdateUnfavorite)
        : null}
    </div>
  );
}
  
export default FavoriteRecipes;
