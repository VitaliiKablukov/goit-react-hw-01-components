import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const { item, online, offline, item_avatar, item_name } = css;
export const FriendListItem = ({ friend }) => {
  return friend.map(arry => {
    const { avatar, name, isOnline, id } = arry;
    return (
      <li key={id} className={item}>
        <span className={isOnline ? online : offline}></span>
        <img
          className={item_avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={item_name}>{name}</p>
      </li>
    );
  });
};
FriendListItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
