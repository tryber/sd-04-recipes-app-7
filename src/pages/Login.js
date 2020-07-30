import React, { useState } from 'react';

const validEmail = '^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$';

const Login = () => {
  const defaultData = { email: '', pass: '' };
  const [{ email, pass }, setUserData] = useState(defaultData); // userData
  const handleInputs = ({ target: { value, name } }) => {
    setUserData({ ...defaultData, [name]: value });
  };
  return (
    <div>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleInputs}
        pattern={validEmail}
      />
      <input
        type="password"
        name="pass"
        value={pass}
        onChange={handleInputs}
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={email && pass}
      >
        Entrar
      </button>
    </div>
  );
};

export default Login;
