// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './Profile.module.css';

const UserProfile = ({ user, alt }) => (
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
  alt: PropTypes.string,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
