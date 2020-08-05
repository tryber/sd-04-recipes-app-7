import React from 'react';
import BottomBar from '../components/BottomBar/bottomBar';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Profile = () => {
  const userEmail = window.localStorage.getItem('user');

  return (
    <div>
      <Header title="Perfil" />

      <p data-testid="profile-email">{userEmail}</p>

      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-favorite-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-done-btn">Receitas favoritas</button>
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
