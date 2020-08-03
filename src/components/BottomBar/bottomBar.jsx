import React, { Component } from 'react';
import './bottomBar.css';
import { Link } from 'react-router-dom';
import { defaultsDeep } from 'lodash';
import drink from '../../images/drinkIcon.svg';
import explorer from '../../images/exploreIcon.svg';
import fork from '../../images/mealIcon.svg';

const BottomBar = () => (
  <footer data-testid="footer" className="master-container">
    <div data-testid="drinks-bottom-btn">
      <Link to="/bebidas">
        <img src={drink} alt="cup" />
      </Link>
    </div>
    <div data-testid="explore-bottom-btn">
      <Link to="/explorar">
        <img src={explorer} alt="explorer" />
      </Link>
    </div>
    <div data-testid="food-bottom-btn">
      <Link to="/comidas">
        <img src={fork} alt="fork" />
      </Link>
    </div>
  </footer>
)

export default BottomBar;
