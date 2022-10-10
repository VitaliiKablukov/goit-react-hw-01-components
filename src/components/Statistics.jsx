import { StatisticsList } from './StatisticsList';
import css from '../css/Statistics.module.css';
import data from '../data.json';
const { title, statistics } = css;
export const Statistics = () => {
  return (
    <section className={statistics}>
      {data.length > 0 ? <h2 className={title}>Upload stats</h2> : ''}
      <StatisticsList data={data} />
    </section>
  );
};
