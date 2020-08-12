import React from 'react';
import copyToClipboard from 'clipboard-copy';
import PropTypes from 'prop-types'
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = ({ testid, path }) => {
  const wayTo = `${window.location.host}${path}`;
  return (
    <div>
      <button onClick={() => copyToClipboard(wayTo)}
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