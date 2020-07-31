import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { checkEmail } from '../services';

// const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
// const checkEmail = (email) => validEmail.test(email);
const checkPass = (password) => password.length > 6;
const defaultData = { email: '', pass: '' };

const Login = () => {
  const [userData, setUserData] = useState(defaultData);
  const handleInputs = ({ target: { name, value } }) => setUserData({ ...userData, [name]: value });
  return (
    <div>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleInputs}
        data-testid="email-input"
      />
      <input
        type="password"
        name="pass"
        value={userData.pass}
        onChange={handleInputs}
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={!(checkEmail(userData.email) && checkPass(userData.pass))}
        onClick={() => {
          localStorage.setItem('mealsToken', 1);
          localStorage.setItem('cocktailsToken', 1);
          localStorage.setItem('user', JSON.stringify({ email: userData.email }));
          // <Redirect to="/comidas" />
        }}
      >
        Entrar
      </button>
    </div>
  );
};

export default Login;
