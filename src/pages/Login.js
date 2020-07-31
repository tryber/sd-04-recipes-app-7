import React, { useState } from 'react';

const validEmail = /^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
const checkEmail = (email) => validEmail.test(email);
const checkPass = (password) => password.length > 6;
const defaultData = { email: '', pass: '' };

const Login = () => {
  const [userData, setUserData] = useState(defaultData);
  const handleInputs = ({ target: { name, value } }) =>
    setUserData({ ...userData, [name]: value });
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
      >
        Entrar
      </button>
    </div>
  );
};

export default Login;
