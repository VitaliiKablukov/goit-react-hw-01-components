import PropTypes from 'prop-types';
import css from './Profile.module.css';
const {
  profile,
  description,
  profile_avatar,
  profile_name,
  profile_stats,
  profile_tag,
  profile_location,
  profile_quantity,
  profile_stats_info,
  profile_stats_label,
} = css;
//
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt="User avatar" className={profile_avatar} />
        <p className={profile_name}>{username}</p>
        <p className={profile_tag}>@{tag}</p>
        <p className={profile_location}>{location}</p>
      </div>

      <ul className={profile_stats}>
        <li className={profile_stats_info}>
          <span className={profile_stats_label}>Followers</span>
          <span className={profile_quantity}>{followers}</span>
        </li>
        <li className={profile_stats_info}>
          <span className={profile_stats_label}>Views</span>
          <span className={profile_quantity}>{views}</span>
        </li>
        <li className={profile_stats_info}>
          <span className={profile_stats_label}>Likes</span>
          <span className={profile_quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
