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
  // eslint-disable-next-line react/forbid-prop-types
  stats: propTypes.array.isRequired,
};

export default Stats;
