import React, { useEffect } from "react";
import styled from "styled-components";
import PlayingField from "../playing-field/playing-field";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFigure, createNextFigure } from "../../actions/actions";

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
  const dispatch = useDispatch();
  const nextFigure = useSelector(state => state.nextFigure);
  const currentFigure = useSelector(state => state.currentFigure);

  useEffect(() => {
    if (nextFigure.isEmpty) {
      dispatch(createNextFigure());
    }
    if (!nextFigure.isEmpty && currentFigure.isEmpty)
      dispatch(setCurrentFigure(nextFigure));
  }, [dispatch, nextFigure, currentFigure]);

  return (
    <TableWrapper>
      <PlayingField />
    </TableWrapper>
  );
};

export default Table;
