import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const checkEmailPass = () => ( 
    password.length > 6 && /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(email)
    );

  const setToLocalStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <div>
      <input
        required
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email-input"
      />
      <input
        type="password"
        name="pass"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password-input"
      />
      <Link to="/comidas">
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={!checkEmailPass()}
          onClick={() => setToLocalStorage(email)}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
