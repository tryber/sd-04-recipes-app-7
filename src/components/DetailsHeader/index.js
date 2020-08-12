import React from 'react';
import PropTypes from 'prop-types';
import Heart from '../../images/whiteHeartIcon.svg';
import Share from '../../images/shareIcon.svg';
import { setLS } from '../HelpStorage';
import './styles.css';
import FavoriteButton from '../FavoriteButton';

const setStorage = (favorite) => {
  setLS('favoriteRecipes', favorite);
};

const DetailsHeader = ({ img, name, category, favorite }) => (
  <div>
    <img className="image-recipe" src={img} alt="Recipe" />
    <div className="titles-container">
      <h3>{name}</h3>
      <div className="imgs-container">
        <button>
          <img src={Share} alt="Share Icon" />
        </button>
        <FavoriteButton />
      </div>
    </div>
    <p className="p-class">{category}</p>
  </div>
);

DetailsHeader.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  favorite: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default DetailsHeader;
