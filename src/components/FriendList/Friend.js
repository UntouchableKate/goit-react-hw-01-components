// Core
import React from 'react';
import propTypes from 'prop-types';
// Instruments
import styles from './FriendList.module.css';

const Friend = ({ friend }) => (
  <li key={friend.id} className={styles.li}>
    <span className={friend.isOnline ? styles.online : styles.offline}>
      {friend.isOnline}
    </span>
    <img src={friend.avatar} alt="" width="48" className={styles.img} />
    <p>{friend.name}</p>
  </li>
);

Friend.propTypes = {
  friend: propTypes.shape({
    id: propTypes.number.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
  }).isRequired,
};

export default Friend;
