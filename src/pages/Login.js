import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context';

const checkEmail = (email) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(email);
const checkPass = (password) => password.length > 6;
// const defaultData = { email: '', pass: '' };

const setToLocalStorage = (email) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
}

const Login = () => {
  const { userEmail, setUserEmail, userPassword, setUserPassword, } = useContext(RecipesContext);
  return (
    <div>
      <input
        required
        type="email"
        name="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        data-testid="email-input"
      />
      <input
        type="password"
        name="pass"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        data-testid="password-input"
      />
      <Link to="/comidas">
        <button
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
