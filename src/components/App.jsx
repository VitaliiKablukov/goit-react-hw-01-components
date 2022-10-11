import { Profile } from './Profile/Profile';
import { Fragment } from 'react';
import { FriendList } from './Friends/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './Transactions/Transactions';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.uername}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
};
