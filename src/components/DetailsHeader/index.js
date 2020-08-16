import React from 'react';
import PropTypes from 'prop-types';
import Heart from '../../images/whiteHeartIcon.svg';
import { setLS } from '../HelpStorage';
import './styles.css';
import ShareButton from '../ShareButton';

const setStorage = (favorite) => {
  setLS('favoriteRecipes', favorite);
};

const DetailsHeader = ({ img, name, category, favorite }) => (
  <div>
    <img data-testid="recipe-photo" className="image-recipe" src={img} alt="Recipe" />
    <div className="titles-container">
      <h3 data-testid="recipe-title">{name}</h3>
      <div className="imgs-container">
        <ShareButton testid="share-btn" path={window.location.pathname} />
        <button onClick={(() => setStorage(favorite))}>
          <img data-testid="favorite-btn" src={Heart} alt="Heart Icon" />
        </button>
      </div>
    </div>
    <p data-testid="recipe-category" className="p-class">{category}</p>
  </div>
);

DetailsHeader.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  favorite: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default DetailsHeader;
