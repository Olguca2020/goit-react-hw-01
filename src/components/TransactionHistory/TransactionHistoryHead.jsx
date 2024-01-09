import css from "../TransactionHistory/TransactionHistory.module.css";
export const TransactionHistoryHead = ()=>{
    return (        
  <thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    )
}