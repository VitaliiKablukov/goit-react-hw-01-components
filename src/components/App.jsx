import { Profile } from './Profile';
import userInfo from '../user.json';
import { Fragment } from 'react';
import { FriendList } from './FriendList';
import { Statistics } from './Statistics';
import { Transactions } from './Transactions';
export const App = () => {
  return (
    <Fragment>
      <Profile userInfo={userInfo} />
      <Statistics />
      <FriendList />
      <Transactions />
    </Fragment>
  );
};
