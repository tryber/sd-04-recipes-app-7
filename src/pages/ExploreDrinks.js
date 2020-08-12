import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { randomDrinkId } from '../services';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';

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
      <Header title="Explorar Bebidas" />
      <button
        data-testid="explore-by-ingredient"
        onClick={() => history.push('/explorar/bebidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        data-testid="explore-surprise"
        onClick={() => surpriseMe(history)}
      >
        Me Surpreenda!
      </button>
      <BottomBar />
    </div>
  );
};

export default ExploreDrinks;
