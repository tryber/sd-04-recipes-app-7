import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { randomDrinkId } from '../services';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';

import './CSS/ExplorersBy.css';

const ExploreDrinks = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const alternative = `/bebidas/${id}`;
  const surpriseMe = (value) => {
    value.push(alternative);
  };

  useEffect(() => {
    randomDrinkId().then((data) => setId(data.drinks[0].idDrink));
  }, []);
  return (
    <div>
      <Header title="Explorar Bebidas" visible={false} />
      <button
        data-testid="explore-by-ingredient"
        className="explorer-by-button"
        onClick={() => history.push('/explorar/bebidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        data-testid="explore-surprise"
        className="explorer-by-button"
        onClick={() => surpriseMe(history)}
      >
        Me Surpreenda!
      </button>
      <BottomBar />
    </div>
  );
};

export default ExploreDrinks;
