import { Profile } from './Profile/Profile';
import user from './testData/user.json';

import Statistics from './Statistics/Statistics';
import data from './testData/data.json';

import FriendList from './FriendList/FriendList';
import friends from './testData/friends.json';

import TransactionHistory from './TransactionHistory/Transactions';
import transactions from './testData/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
