// Core
import React from 'react';
import propTypes from 'prop-types';

// Instruments
import styles from './Stats.module.css';

// Components
import ObjectStats from './ObjectStats';

const Stats = ({ title, stats }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(stat => (
        <ObjectStats stat={stat} key={stat.id} />
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: 'Upload stats',
};

Stats.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
