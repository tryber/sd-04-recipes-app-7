import React from 'react';
import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar/BottomBar';
import Header from '../components/Header';

import './CSS/Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user ? user.email : 'teste@teste.com';

  return (
    <div>
      <Header title="Perfil" visible={false} />

      <p data-testid="profile-email" className="profile-email">
        {email}
      </p>

      <Link to="/receitas-favoritas" className="profile-link">
        <button type="button" data-testid="profile-favorite-btn" className="profile-button">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/receitas-feitas" className="profile-link">
        <button data-testid="profile-done-btn" className="profile-button">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/" className="profile-link">
        <button
          data-testid="profile-logout-btn"
          className="profile-button"
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
