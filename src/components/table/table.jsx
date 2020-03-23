import React from "react";
import styled from "styled-components";
import PlayingField from "../playing-field/playing-field";

const TableWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 1000px;
  height: 800px;
  border: 1px solid black;
`;

const Table = () => {
  return (
    <TableWrapper>
      <PlayingField />
    </TableWrapper>
  );
};

export default Table;
