import css from "../Transaction/Transaction.module.css";

const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.info}>{type}</td>
      <td className={css.info}>{amount}</td>
      <td className={css.info}>{currency}</td>
    </>
  );
};

export { Transaction };
