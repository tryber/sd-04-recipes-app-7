import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { Provider } from './context';
import * as pages from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Router exact path='/' component={pages.Login} />
          <Router exact path='/comidas' />
          <Router exact path='/bebidas' />
          <Router exact path='/comidas/:id' />
          <Router exact path='/bebidas/:id' />
          <Router path='/comidas/:id/in-progress' />
          <Router path='/bebidas/:id/in-progress' />
          <Router exact path='/explorar' />
          <Router exact path='/explorar/comidas' />
          <Router exact path='/explorar/bebidas' />
          <Router path='/explorar/comidas/ingredientes' />
          <Router path='/explorar/bebidas/ingredientes' />
          <Router path='/explorar/comidas/area' />
          <Router path='/perfil' />
          <Router path='/receitas-feitas' />
          <Router path='/receitas-favoritas' />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
