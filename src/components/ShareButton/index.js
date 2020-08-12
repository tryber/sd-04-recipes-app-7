import React, { useState } from 'react';
import copyToClipboard from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

const togglePopUp = (setPopUpVisible) => {
  setPopUpVisible(true);
  setTimeout(() => setPopUpVisible(false), 1500);
};

const ShareButton = ({ testid, path }) => {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const wayTo = `${window.location.origin}${path}`;
  return (
    <div className="share-button-container">
      {popUpVisible && <span className="pop-up-clipboard">Link copiado!</span>}
      <button
        className="share-button"
        onClick={() => {
          copyToClipboard(wayTo);
          togglePopUp(setPopUpVisible);
        }}
      >
        <img src={shareIcon} alt="share-icon" data-testid={testid} />
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ShareButton;
