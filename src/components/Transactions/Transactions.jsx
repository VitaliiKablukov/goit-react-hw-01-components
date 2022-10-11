import PropTypes from 'prop-types';
import css from './Transactions.module.css';
const { transaction_history, thead, thead_title, transition, transition_item } =
  css;
export const TransactionHistory = ({ items }) => {
  return (
    <table className={transaction_history}>
      <thead className={thead}>
        <tr>
          <th className={thead_title}>Type</th>
          <th className={thead_title}>Amount</th>
          <th className={thead_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(arry => {
          const { id, type, amount, currency } = arry;
          return (
            <tr key={id} className={transition}>
              <td className={transition_item}>{type}</td>
              <td className={transition_item}>{amount}</td>
              <td className={transition_item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
