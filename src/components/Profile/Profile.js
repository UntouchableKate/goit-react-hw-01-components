// Core
import React from 'react';
import PropTypes from 'prop-types';

// Instruments
import styles from './Profile.module.css';

// Components
import UserProfile from './UserProfile';
import UserStatus from './UserStatus';

const Profile = ({ user }) => (
  <div className={styles.wrapper}>
    <UserProfile user={user} />

    <UserStatus user={user} />
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
