import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './context';
import './App.css';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/comidas' />
          <Route exact path='/bebidas' />
          <Route exact path='/comidas/:id' />
          <Route exact path='/bebidas/:id' />
          <Route exact path='/bebidas/:id/in-progress' />
          <Route />
          <Route />
          <Route />
          <Route />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;


/*
Tela de login: /;
Tela principal de receitas de comidas: /comidas;
Tela principal de receitas de bebidas: /bebidas;
Tela de detalhes de uma receita de comida: /comidas/{id-da-receita};
Tela de detalhes de uma receita de bebida: /bebidas/{id-da-receita};
Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
Tela de explorar: /explorar;
Tela de explorar comidas: /explorar/comidas;
Tela de explorar bebidas: /explorar/bebidas;
Tela de explorar comidas por ingrediente: /explorar/comidas/ingredientes;
Tela de explorar bebidas por ingrediente: /explorar/bebidas/ingredientes;
Tela de explorar comidas por local de origem: /explorar/comidas/area;
Tela de perfil: /perfil;
Tela de receitas feitas: /receitas-feitas;
Tela de receitas favoritas: /receitas-favoritas.
*/
