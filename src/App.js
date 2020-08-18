import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './context';
import * as pages from './pages';
import './App.css';

const App = () => (
  <Router>
    <Provider>
      <Switch>
        <Route exact path="/" component={pages.Login} />
        <Route exact path="/comidas" component={pages.MainPageFoods} />
        <Route exact path="/bebidas" component={pages.MainPageDrinks} />
        <Route exact path="/comidas/:id" component={pages.DetailsFoods} />
        <Route exact path="/bebidas/:id" component={pages.DetailsDrinks} />
        <Route path="/comidas/:id/in-progress" component={pages.ProgressFoods} />
        <Route path="/bebidas/:id/in-progress" component={pages.ProgressDrinks} />
        <Route exact path="/explorar" component={pages.Explorar} />
        <Route exact path="/explorar/comidas" component={pages.ExploreFoods} />
        <Route exact path="/explorar/bebidas" component={pages.ExploreDrinks} />
        <Route path="/explorar/comidas/ingredientes" component={pages.IngredientsFoods} />
        <Route path="/explorar/bebidas/ingredientes" component={pages.IngredientsDrinks} />
        <Route path="/explorar/comidas/area" component={pages.ExploreFoodsOrigin} />
        <Route path="/perfil" component={pages.Profile} />
        <Route path="/receitas-feitas" component={pages.MadeRecipes} />
        <Route path="/receitas-favoritas" component={pages.FavoriteRecipes} />
        <Route path="*" component={pages.NotFound} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
