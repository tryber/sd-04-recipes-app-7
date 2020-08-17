import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Radio = ({ testid, id, search, label }) => (
  <Fragment>
    <input
      className="searchBar-radio"
      data-testid={testid}
      id={id}
      type="radio"
      name="filter"
      onChange={(e) => search(e.target.id)}
    />
    <label htmlFor={id} className="searchBar-label">
      {label}
    </label>
  </Fragment>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Radio;
