import css from '../css/StatisticsList.module.css';
const { stat_list, item, item_label, item_percentage } = css;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const StatisticsList = ({ data }) => (
  <ul className={stat_list}>
    {data.map(arry => {
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
);
