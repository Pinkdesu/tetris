import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NextFigure from "../next-figure/next-figure";
import GameSession from "../game-session/game-session";
import PlayingField from "../playing-field/playing-field";
import { useDispatch, useSelector } from "react-redux";
import {
  createNextFigure,
  setTime,
  setActiveGame,
} from "../../actions/actions";
import {
  TableWrapper,
  CenterSideWrapper,
} from "../styled-components/styled-components";

export const TableContext = React.createContext(null);

export const Table = ({ gameSession }) => {
  const dispatch = useDispatch();
  const nextFigure = useSelector((state) => state.nextFigure);
  const width = gameSession.width;

  useEffect(() => {
    if (!gameSession.isGameActive && gameSession.time.seconds !== 0) {
      const timer = setInterval(
        () => dispatch(setTime(0, 0, gameSession.time.seconds - 1)),
        1000
      );

      return () => {
        clearInterval(timer);
      };
    } else dispatch(setActiveGame());
  }, [dispatch, gameSession.isGameActive, gameSession.time.seconds]);

  useEffect(() => {
    if (nextFigure.isEmpty) dispatch(createNextFigure());
  }, [dispatch, nextFigure.isEmpty]);

  return (
    <TableContext.Provider value={{ width: gameSession.width }}>
      <TableWrapper width={width}>
        <NextFigure width={width} nextFigure={nextFigure} />
        {gameSession.isGameActive ? (
          <PlayingField width={width} nextFigure={nextFigure} />
        ) : (
          <CenterSideWrapper>{gameSession.time.seconds}</CenterSideWrapper>
        )}
        <GameSession width={nextFigure} gameSession={gameSession} />
      </TableWrapper>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  gameSession: PropTypes.object,
};
Table.defaultProps = {
  gameSession: {},
};
