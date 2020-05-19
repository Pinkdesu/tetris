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
  const [prevTimer, setPrevTimer] = useState(null);
  const nextFigure = useSelector((state) => state.nextFigure);
  const {
    isGameStarted,
    isGameActive,
    isGameFinished,
    speed,
    points,
    width,
  } = useSelector((state) => state.gameSession);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isGameStarted) {
      setPrevTimer(3);
    } else {
      setPrevTimer(null);
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (!isGameFinished && !isGameActive && prevTimer > 0) {
      setTimeout(() => setPrevTimer(prevTimer - 1), 1000);
    }
    if (!isGameFinished && !isGameActive && prevTimer === 0) {
      dispatch(setActiveGame(true));
    }
  }, [dispatch, isGameActive, isGameFinished, prevTimer]);

  useEffect(() => {
    if (nextFigure.isEmpty && isGameActive) dispatch(createNextFigure());
  }, [dispatch, isGameActive, nextFigure.isEmpty]);

  return (
    <TableContext.Provider value={{ width: width }}>
      <TableWrapper width={width} isDisplayed={!isGameFinished}>
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
