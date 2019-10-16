// Core
import React from 'react';
import propTypes from 'prop-types';
// Instruments
import styles from './Stats.module.css';

const ObjectStats = ({ stat }) => (
  <li key={stat.id} className={styles.li}>
    <span className={styles.format}>{stat.label}</span>
    <span className={styles.percent}>{stat.percentage}%</span>
  </li>
);

ObjectStats.propTypes = {
  stat: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired,
};

export default ObjectStats;
