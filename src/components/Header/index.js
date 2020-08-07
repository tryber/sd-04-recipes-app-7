import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';
import { RecipesContext } from '../../context';
import './Header.css';

const Header = ({ title, visible }) => {
  const { searchbar, setSearchbar } = useContext(RecipesContext);

  return (
    <div >
      <header className="main-container">
        <div className="profile-container">
          <Link to="/perfil">
            <img src={profileIcon} alt="profil Icon" data-testid="profile-top-btn" />
          </Link>
        </div>
        <div>
          <h1 className="title-container" data-testid="page-title">{title}</h1>
        </div>
        {visible ? (
          <div className="glass-container">
            <input
              src={searchIcon}
              type="image"
              data-testid="search-top-btn"
              onClick={() => setSearchbar(!searchbar)}
              alt="search Icon"
            />
          </div>
        ) : (
          <div />
        )}
      </header>
      {searchbar && <SearchBar />}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Header;
