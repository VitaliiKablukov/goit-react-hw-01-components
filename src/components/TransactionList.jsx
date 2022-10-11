import css from '../css/TransactionList.module.css';
const { transition, transition_item } = css;
export const TransactionList = ({ transactions }) => {
  return transactions.map(arry => {
    const { id, type, amount, currency } = arry;
    return (
      <tr key={id} className={transition}>
        <td className={transition_item}>{type}</td>
        <td className={transition_item}>{amount}</td>
        <td className={transition_item}>{currency}</td>
      </tr>
    );
  });
};
