import PropTypes from "prop-types";
import {
  TransactionTableRow,
  TransactionTableItem,
} from "./TransactionHistory.styled";

export default function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <TransactionTableRow key={id}>
      <TransactionTableItem>{type}</TransactionTableItem>
      <TransactionTableItem>{amount}</TransactionTableItem>
      <TransactionTableItem>{currency}</TransactionTableItem>
    </TransactionTableRow>
  );
}

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
