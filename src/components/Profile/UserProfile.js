// Core
import React from 'react';
import propTypes from 'prop-types';
// Instruments
import styles from './Profile.module.css';

const UserProfile = ({ user }, alt) => (
  <div className={styles.imgWrp}>
    <img className={styles.img} src={user.avatar} alt={alt} />
    <p className={styles.name}>{user.name}</p>
    <p className={styles.greyTitle}>@{user.tag}</p>
    <p className={styles.greyTitle}>{user.location}</p>
  </div>
);

UserProfile.defaultProps = {
  alt: 'user photo',
};

UserProfile.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  alt: propTypes.string,
  user: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
