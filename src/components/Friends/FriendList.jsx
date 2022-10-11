import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import css from './FriendList.module.css';

const { friend_list } = css;
export const FriendList = ({ friends }) => {
  return (
    <ul className={friend_list}>
      <FriendItem friend={friends} />
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
