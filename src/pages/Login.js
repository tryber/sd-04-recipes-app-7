import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context';

import './CSS/Login.css';

const checkEmail = (email) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(email);
const checkPass = (password) => password.length > 6;

const inProgressRecipes = {
  cocktails: {},
  meals: {},
};

const setToLocalStorage = (email) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
  localStorage.setItem(
    'doneRecipes',
    JSON.stringify([
      {
        id: 5555,
        type: 'comida',
        area: 'Indian',
        category: 'Chicken',
        alcoholicOrNot: '',
        name: 'Chicken Handi',
        image: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
        doneDate: '11/09/2020',
        tags: ['ChickenMeat', 'Spicy'],
      },
      {
        id: 1111,
        type: 'bebida',
        area: '',
        category: 'Ordinary Drink',
        alcoholicOrNot: 'Alcoholic',
        name: 'Long vodka',
        image: 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
        doneDate: '10/09/2020',
        tags: [],
      },
    ]),
  );
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

const Login = () => {
  const { userEmail, setUserEmail, userPassword, setUserPassword } = useContext(RecipesContext);
  return (
    <div>
      <span className="login-title">Login</span>
      <input
        className="login-input"
        placeholder="Email"
        type="email"
        name="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        data-testid="email-input"
      />
      <input
        className="login-pass"
        placeholder="Senha"
        type="password"
        name="pass"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        data-testid="password-input"
      />
      <Link to="/comidas">
        <button
          className="login-button"
          type="submit"
          data-testid="login-submit-btn"
          disabled={!(checkEmail(userEmail) && checkPass(userPassword))}
          onClick={() => setToLocalStorage(userEmail)}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
};

export default Login;
