import transactionsInfo from '../transactions.json';
import { TransactionList } from './TransactionList';
import css from '../css/Transactions.module.css';
const { transaction_history, thead, thead_title } = css;
export const Transactions = () => {
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
        <TransactionList transactions={transactionsInfo} />
      </tbody>
    </table>
  );
};
