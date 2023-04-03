import PropTypes from 'prop-types';
import css from '../FriendList/FriendItem.module.css';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.friendItem}>
      <span
        className={
          isOnline === true ? `${css.statusOnline}` : `${css.statusOffline}`
        }
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
