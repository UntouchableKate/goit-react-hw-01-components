import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.thead}>Type</th>
        <th className={styles.thead}>Amount</th>
        <th className={styles.thead}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.tr}>
          <td className={styles.tbody}>
            {item.type[0].toUpperCase() + item.type.slice(1)}
          </td>
          <td className={styles.tbody}>{item.amount}</td>
          <td className={styles.tbody}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
