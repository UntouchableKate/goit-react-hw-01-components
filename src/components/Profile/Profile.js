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
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};

export default Profile;
