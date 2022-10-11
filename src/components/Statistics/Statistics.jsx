import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const {
  statics_title,
  statistics_section,
  stat_list,
  item,
  item_label,
  item_percentage,
} = css;
//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//
export const Statistics = ({ title, stats }) => {
  return (
    <section className={statistics_section}>
      {title ? <h2 className={statics_title}>{title}</h2> : ''}
      <ul className={stat_list}>
        {stats.map(arry => {
          const { id, label, percentage } = arry;
          return (
            <li
              key={id}
              className={item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={item_label}>{label}</span>
              <span className={item_percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
