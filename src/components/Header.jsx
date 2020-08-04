import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = ({ title, searchble }) => {
  const [searchbar, setSearchbar] = useState(false);

  return (
    <div>
      <header>
        <Link to="/perfil">
          <img src={profileIcon} alt="profil Icon" data-testid="profile-top-btn" />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        {searchble && (
          <input
            src={searchIcon}
            type="image"
            data-testid="search-top-btn"
            onClick={() => setSearchbar(!searchbar)}
            alt="search Icon"
          />
        )}
      </header>
      {searchbar && <h1>oi</h1> }
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  serachble: PropTypes.bool.isRequired,
};

export default Header;
