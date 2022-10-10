import friendInfo from '../friends.json';
import { Friends } from './Friends';
import css from '../css/FriendList.module.css';

export const FriendList = () => {
  return (
    <ul className={css.friend_list}>
      <Friends friendInfo={friendInfo} />
    </ul>
  );
};
