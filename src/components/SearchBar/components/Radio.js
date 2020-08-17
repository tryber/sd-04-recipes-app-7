import React from 'react';

import './styles.css';

const Radio = ({ testid, id, search, label }) => {
  return (
    <>
      <input
        className="searchBar-radio"
        data-testid={testid}
        id={id}
        type="radio"
        name="filter"
        onChange={(e) => search(e.target.id)}
      />
      <span className="checkmark"></span>
      <label htmlFor={id} className="searchBar-label">{label}</label>
    </>
  );
};

export default Radio;
