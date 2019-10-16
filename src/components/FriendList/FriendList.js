// Core
import React from 'react';
import PropTypes from 'prop-types';

// Instruments
import styles from './FriendList.module.css';

// Components
import Friend from './Friend';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <Friend friend={friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  friends: PropTypes.array.isRequired,
};

export default FriendList;
