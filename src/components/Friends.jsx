import css from '../css/Friends.module.css';
const { item, online, offline, item_avatar, item_name } = css;
export const Friends = ({ friendInfo }) => {
  return friendInfo.map(arry => {
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
  });
};
