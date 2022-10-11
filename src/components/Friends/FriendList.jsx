import PropTypes from 'prop-types';
import { FriendListItem } from './FriendItem';
import css from './FriendList.module.css';

const { friend_list } = css;
export const FriendList = ({ friends }) => {
  return (
    <ul className={friend_list}>
      <FriendListItem friend={friends} />
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
