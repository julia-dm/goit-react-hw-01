import React from 'react';
import clsx from 'clsx';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friendItem}>
          <img className={styles.avatar} src={avatar} alt={name} />
          <p className={styles.name}>{name}</p>
          <p className={clsx(styles.statusText, isOnline ? styles.online : styles.offline)}>
  {isOnline ? 'Online' : 'Offline'}
</p>

        </li>
      ))}
    </ul>
  );
};

export default FriendList;
