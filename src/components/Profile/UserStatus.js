// Core
import React from 'react';
import propTypes from 'prop-types';
// Instruments
import styles from './Profile.module.css';

const UserStatus = ({ user }) => (
  <ul className={styles.list}>
    <li key={user.stats.followers} className={styles.stats}>
      <span>Followers</span>
      <span className={styles.span}>{user.stats.followers}</span>
    </li>
    <li key={user.stats.views} className={styles.stats}>
      <span>Views</span>
      <span className={styles.span}>{user.stats.views}</span>
    </li>
    <li key={user.stats.likes} className={styles.stats}>
      <span>Likes</span>
      <span className={styles.span}>{user.stats.likes}</span>
    </li>
  </ul>
);

UserStatus.propTypes = {
  user: propTypes.shape({
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }),
  }).isRequired,
};

export default UserStatus;
