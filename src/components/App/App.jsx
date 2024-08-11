import React from 'react';
import userData from '../../userData.json';  
import Profile from '../Profile/Profile';  
import styles from './App.module.css'; 
import friendsData from '../../friends.json'; 
import FriendList from '../FriendList/FriendList'; 
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json'
const App = () => {
  return (
    <div className={styles.appContainer}>
      <Profile  
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;


