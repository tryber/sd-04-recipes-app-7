import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg'

const Header = ({ type, title }) => {
  const [searchbar, setSearchbar] = useState(false);

  return (
    <div>
      <header>
        <Link to="/perfil">
          <img src={profileIcon} alt="profilIcon" data-testid="profile-top-btn" />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        <input
          src={searchIcon}
          type="image"
          data-testid="search-top-btn"
          onClick={() => setSearchbar(!searchbar)}
          alt="img-search"
        />
      </header>
      {searchbar && <h1 type={type}>Searchbar</h1>}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
