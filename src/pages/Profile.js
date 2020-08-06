import React from 'react';
import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user ? user.email : 'teste@teste.com';

  return (
    <div>
      <Header title="Perfil" />

      <p data-testid="profile-email">{email}</p>

      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      </Link>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/">
        <button
          data-testid="profile-logout-btn"
          onClick={() => window.localStorage.clear()}
        >
          Sair
        </button>
      </Link>
      <BottomBar />
    </div>
  );
};

export default Profile;
