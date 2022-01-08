import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableHeadRow,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TransactionTableHeadRow>Type</TransactionTableHeadRow>
          <TransactionTableHeadRow>Amount</TransactionTableHeadRow>
          <TransactionTableHeadRow>Currency</TransactionTableHeadRow>
        </tr>
      </TransactionTableHead>
      <tbody>{items.map(TransactionHistoryItem)}</tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
