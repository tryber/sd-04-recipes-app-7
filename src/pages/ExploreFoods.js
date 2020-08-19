import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { randomFoodId } from '../services';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';

const ExploreFoods = () => {
  const history = useHistory();
  const [id, setId] = useState('');
  const alternative = `/comidas/${id}`;
  const surpriseMe = (value) => {
    value.push(alternative);
  };

  useEffect(() => {
    randomFoodId().then((data) => setId(data.meals[0].idMeal));
  }, []);
  return (
    <div>
      <Header title="Explorar Comidas" visible={false} />
      <button
        data-testid="explore-by-ingredient"
        onClick={() => history.push('/explorar/comidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        data-testid="explore-by-area"
        onClick={() => history.push('/explorar/comidas/area')}
      >
        Por Local de Origem
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

export default ExploreFoods;
