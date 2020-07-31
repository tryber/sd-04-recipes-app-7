import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './context';
import * as pages from './pages';
import './App.css';

const App = () => {
  (
    <Router>
      <Provider>
        <Switch>
          <Route exact path="/" component={pages.Login} />
          <Route exact path="/comidas" />
          <Route exact path="/bebidas" />
          <Route exact path="/comidas/:id" />
          <Route exact path="/bebidas/:id" />
          <Route path="/comidas/:id/in-progress" />
          <Route path="/bebidas/:id/in-progress" />
          <Route exact path="/explorar" />
          <Route exact path="/explorar/comidas" />
          <Route exact path="/explorar/bebidas" />
          <Route path="/explorar/comidas/ingredientes" />
          <Route path="/explorar/bebidas/ingredientes" />
          <Route path="/explorar/comidas/area" />
          <Route path="/perfil" />
          <Route path="/receitas-feitas" />
          <Route path="/receitas-favoritas" />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
