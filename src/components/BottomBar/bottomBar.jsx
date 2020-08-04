import React from 'react';
import { Link } from 'react-router-dom';
import './bottomBar.css';
import drink from '../../images/drinkIcon.svg';
import explorer from '../../images/exploreIcon.svg';
import fork from '../../images/mealIcon.svg';

const BottomBar = () => (
  <footer data-testid="footer" className="master-container">
    <div>
      <Link to="/bebidas">
        <img data-testid="drinks-bottom-btn" src={drink} alt="cup" />
      </Link>
    </div>
    <div>
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={explorer} alt="explorer" />
      </Link>
    </div>
    <div >
      <Link to="/comidas">
        <img data-testid="food-bottom-btn" src={fork} alt="fork" />
      </Link>
    </div>
  </footer>
);

export default BottomBar;
