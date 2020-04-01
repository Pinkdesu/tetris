import React, { useEffect } from "react";
import styled from "styled-components";
import NextFigure from "../next-figure/next-figure";
import GameSession from "../game-session/game-session";
import PlayingField from "../playing-field/playing-field";
import { useDispatch, useSelector } from "react-redux";
import { createNextFigure } from "../../actions/actions";

const TableWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-width: ${props => 20 * props.width}px;
  width: ${props => 20 * props.width}px;
  height: ${props => 20 * props.width}px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid black;
`;

export const TableContext = React.createContext(null);

export const Table = () => {
  const dispatch = useDispatch();
  const gameSession = useSelector(state => state.gameSession);
  const nextFigure = useSelector(state => state.nextFigure);
  const width = gameSession.width;

  useEffect(() => {
    if (nextFigure.isEmpty) dispatch(createNextFigure());
  }, [dispatch, nextFigure.isEmpty]);

  return (
    <TableContext.Provider value={{ width: gameSession.width }}>
      <TableWrapper width={width}>
        <NextFigure width={width} nextFigure={nextFigure} />
        <PlayingField width={width} nextFigure={nextFigure} />
        <GameSession width={nextFigure} gameSession={gameSession} />
      </TableWrapper>
    </TableContext.Provider>
  );
};
