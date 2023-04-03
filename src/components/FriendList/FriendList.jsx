import PropTypes from 'prop-types';
import { Friend } from './FriendItem';
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends, id }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <Friend key={id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
