import React from 'react';
import copyToClipboard from 'clipboard-copy';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = ({ testid, path}) => {
  const { pathname } = useLocation();
  const wayTo = pathname.includes('receitas') ? path : pathname;
  return (
    <div>
      <button onClick={() => {
        copyToClipboard(wayTo);
        document.getElementById('copied').innerHTML = 'Link copiado!';
      }}
      >
        <img src={shareIcon} alt="share-icon" data-testid={testid} />
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default ShareButton;
