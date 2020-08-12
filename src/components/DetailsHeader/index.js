import React from 'react';
import PropTypes from 'prop-types';
import Heart from '../../images/whiteHeartIcon.svg';
import Share from '../../images/shareIcon.svg';
import { setLS } from '../HelpStorage';
import './styles.css';

const setStorage = (favorite) => {
  setLS('favoriteRecipes', favorite);
};

const DetailsHeader = ({ img, name, category, favorite}) => (
  <div>
    <img data-testid="recipe-photo" className="image-recipe" src={img} alt="Recipe" />
    <div className="titles-container">
      <h3 data-testid="recipe-title">{name}</h3>
      <div className="imgs-container">
        <button>
          <img src={Share} alt="Share Icon" />
        </button>
        <button onClick={(() => setStorage(favorite))}>
          <img src={Heart} alt="Heart Icon" />
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
