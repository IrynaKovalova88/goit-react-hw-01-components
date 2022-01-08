import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 620px;
  margin: 30px auto;
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  text-align: center;
  border-radius: 5px;
`;

export const TransactionTableHead = styled.thead`
  background: rgb(86, 181, 184);
  color: #fff;
  text-transform: uppercase;
  font-size: 1.6rem;
`;

export const TransactionTableHeadRow = styled.td`
  padding: 15px;
  border-radius: 5px 5px 0 0;
`;

export const TransactionTableRow = styled.tr`
  font-size: 1.1rem;
  background-color: #fff;
  border: solid 1px black;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;

export const TransactionTableItem = styled.td`
  padding: 8px 10px;
`;
