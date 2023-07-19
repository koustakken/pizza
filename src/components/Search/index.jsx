import React from 'react';

import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        placeholder="Поиск..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
    </div>
  );
};

export default Search;
