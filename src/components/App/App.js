// Core
import React from 'react';

// Components
import Profile from '../Profile';
import Stats from '../Stats';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

// Server
import user from '../../user.json';
import friends from '../FriendList/friends.json';
import items from '../TransactionHistory/transaction.json';

import { stats } from '../../server/status';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
  </>
);

export default App;
