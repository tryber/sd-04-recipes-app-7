import React from 'react';

import './styles.css';

const Radio = ({ testid, id, search, label }) => {
  return (
    <>
      <input
        data-testid={testid}
        id={id}
        type="radio"
        name="filter"
        onChange={(e) => search(e.target.id)}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Radio;
