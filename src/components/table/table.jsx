import React, { useEffect } from "react";
import styled from "styled-components";
import PlayingField from "../playing-field/playing-field";
import { useDispatch, useSelector } from "react-redux";
import { createNextFigure } from "../../actions/actions";

const TableWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 1000px;
  height: 800px;
  border: 1px solid black;
`;

const Table = () => {
  const dispatch = useDispatch();
  const nextFigure = useSelector(state => state.nextFigure);

  useEffect(() => {
    if (nextFigure.isEmpty) dispatch(createNextFigure());
  }, [dispatch, nextFigure.isEmpty]);

  return (
    <TableWrapper>
      <PlayingField nextFigure={nextFigure} />
    </TableWrapper>
  );
};

export default Table;
