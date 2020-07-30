import React, { useState } from 'react';

const validEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const defaultData = { email: '', pass: '', valid: false };

const Login = () => {
  const [userData, setUserData] = useState(defaultData);
  const handleInputs = ({ target: { name, value } }) => {
    if (name === 'email') {
      const valid = validEmail.test(value);
      setUserData({ ...userData, [name]: value, valid });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };
  return (
    <div>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleInputs}
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
        disabled={!(userData.email && userData.valid)}
      >
        Entrar
      </button>
    </div>
  );
};

export default Login;
