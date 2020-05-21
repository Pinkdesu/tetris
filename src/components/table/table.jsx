import React, { useEffect, useState } from "react";
import NextFigure from "../next-figure/next-figure";
import GameSession from "../game-session/game-session";
import PlayingField from "../playing-field/playing-field";
import { useDispatch, useSelector } from "react-redux";
import { createNextFigure, setActiveGame } from "../../actions/actions";
import {
  TableWrapper,
  CenterSideWrapper,
} from "../styled-components/styled-components";

export const TableContext = React.createContext(null);

export const Table = () => {
  const [prevTimer, setPrevTimer] = useState(3);
  const nextFigure = useSelector((state) => state.nextFigure);
  const { isGameActive, isGameFinished, speed, points, width } = useSelector(
    (state) => state.gameSession
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isGameActive && !isGameFinished) {
      if (prevTimer > 0) {
        setTimeout(() => setPrevTimer(prevTimer - 1), 1000);
      }
      if (prevTimer === 0) {
        dispatch(setActiveGame(true));
        setPrevTimer(null);
      }
    }
  }, [dispatch, isGameActive, isGameFinished, prevTimer]);

  useEffect(() => {
    if (nextFigure.isEmpty && !isGameFinished) dispatch(createNextFigure());
  }, [dispatch, isGameFinished, nextFigure.isEmpty]);

  return (
    <TableContext.Provider value={{ width: width }}>
      <TableWrapper width={width}>
        <NextFigure width={width} nextFigure={nextFigure} />
        {isGameActive ? (
          <PlayingField
            width={width}
            nextFigure={nextFigure}
            isGameActive={isGameActive}
          />
        ) : (
          <CenterSideWrapper>{prevTimer}</CenterSideWrapper>
        )}
        <GameSession
          isGameActive={isGameActive}
          isGameFinished={isGameFinished}
          speed={speed}
          points={points}
        />
      </TableWrapper>
    </TableContext.Provider>
  );
};
