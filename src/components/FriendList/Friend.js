// Core
import React from 'react';
import PropTypes from 'prop-types';
// InstrumentsPropTypes
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
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Friend;
