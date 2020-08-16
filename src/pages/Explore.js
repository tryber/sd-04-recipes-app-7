import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';

const Explore = () => {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" visible={false} />
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
