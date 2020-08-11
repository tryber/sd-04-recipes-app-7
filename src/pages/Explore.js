import React from 'react';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';

const Explore = () => {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" />
      <button
        data-testid="explore-food"
        onClick={() => history.push('/explorar/comidas')}
      >
        Explorar Comidas
      </button>
      <button
        data-testid="explore-drinks"
        onClick={() => history.push('/explorar/bebidas')}
      >
        Explorar Bebidas
      </button>
      <BottomBar />
    </div>
  );
};

export default Explore;
