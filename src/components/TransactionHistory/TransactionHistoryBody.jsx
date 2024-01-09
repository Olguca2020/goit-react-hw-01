import css from "../TransactionHistory/TransactionHistory.module.css";
import {TransactionHistoryHead} from '../TransactionHistory/TransactionHistoryHead'
export const TransactionHistoryBody = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <TransactionHistoryHead />
      <tbody >
      {items.map((item)=>(      
        <tr key ={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};
