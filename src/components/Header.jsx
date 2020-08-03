import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon';
import searchIcon from '../images/searchIcon'

const Header = ({ type, title }) => {
  const [seeSearchbar, setSeeSearchbar] = useState(false);

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
          onClick={() => setSeeSearchbar(!seeSearchbar)}
          alt="img-search"
        />
      </header>
      {/* {seeSearchbar && <Searchbar type={type} />} */}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
