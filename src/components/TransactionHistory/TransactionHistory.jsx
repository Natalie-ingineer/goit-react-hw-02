import css from "../TransactionHistory/TransactionHistory.module.css";
import { Transaction } from "../Transaction/Transaction";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-history"]}>
      <thead className={css.caption}>
        <tr>
          <th scope="col" className={css.header}>
            Type
          </th>
          <th scope="col" className={css.header}>
            Amount
          </th>
          <th scope="col" className={css.header}>
            Currency
          </th>
        </tr>
      </thead>
      <tbody className={css.bodyTable}>
        {items.map((transaction) => (
          <tr bgcolor="azure" key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TransactionHistory };
