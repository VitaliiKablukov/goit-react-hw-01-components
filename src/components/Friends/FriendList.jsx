import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const { item, online, offline, item_avatar, item_name, friend_list } = css;
export const FriendList = ({ friends }) => {
  return (
    <ul className={friend_list}>
      {friends.map(arry => {
        const { avatar, name, isOnline, id } = arry;
        return (
          <li key={id} className={item}>
            {isOnline ? (
              <span className={online}></span>
            ) : (
              <span className={offline}></span>
            )}
            <img
              className={item_avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={item_name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
