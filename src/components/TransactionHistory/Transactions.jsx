import PropTypes from 'prop-types';
import TransactionItem from '../TransactionHistory/TransactionItem';
import css from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionHistory}>
      <table className={css.transactionHeader}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      </table>

      <table className={css.transactionItems}>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
