import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.headerRow}> 
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Amount</th>
          <th className={styles.headerCell}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.dataRow}>
            <td className={styles.dataCell}>{type}</td>
            <td className={styles.dataCell}>{amount}</td>
            <td className={styles.dataCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
