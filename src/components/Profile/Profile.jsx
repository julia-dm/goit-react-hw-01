import React from 'react';
import styles from './Profile.module.css';  

const  Profile = ({ name, tag, location, image, stats }) => {  
  return (
    <div className={styles.profileContainer}> 
      <div className={styles.profileInfo}>  
        <img
          src={image} 
          alt={`${name}'s avatar`}
          className={styles.avatar}  
        />
        <p className={styles.name}>{name}</p>  
        <p className={styles.tag}>&#64;{tag}</p> 
        <p className={styles.location}>{location}</p>  
      </div>

      <ul className={styles.statsList}> 
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers: </span>
          <span className={styles.quantity}>{stats.followers}</span> 
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views: </span>
          <span   className={styles.quantity}> {stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes: </span>
          <span  className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
