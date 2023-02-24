import React from 'react';
import NoResults from '../../src/assets/no-results.png';
import styles from '../styles/NotFound.module.css';
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.NoResults}>
        <Asset 
            src={NoResults}
            message={`Sorry, the page you're looking for doesn't exist`}
        />
    </div>
  )
}

export default NotFound