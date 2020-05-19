import React, { useState, useEffect, useRef } from "react";
import CurrentFigure from "../current-figure/current-figure";
import FallenFigures from "../fallen-figures/fallen-figures";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  rotateFigure,
  moveLeft,
  moveRight,
  moveDown,
  setCurrentFigure,
  clearNextFigure,
  clearCurrentFigure,
  addFallenFigure,
  setActiveGame,
  endGame,
} from "../../actions/actions";
import { PlayingFieldWrapper } from "../styled-components/styled-components";

const PlayingField = ({ nextFigure, isGameActive }) => {
  const [speed, setFigureSpeed] = useState(500);
  const reference = useRef(null);
  const dispatch = useDispatch();
  const currentFigure = useSelector((state) => state.currentFigure);
  const fallenFigures = useSelector((state) => state.fallenFigures);

  useEffect(() => {
    reference.current.focus();
  }, []);

  useEffect(() => {
    if (!nextFigure.isEmpty && currentFigure.isEmpty) {
      if (fallenFigures.linesCount !== 20) {
        dispatch(setCurrentFigure(nextFigure, fallenFigures));
        dispatch(clearNextFigure());
      } else {
        dispatch(setActiveGame(false));
        dispatch(endGame());
      }
    }
  }, [
    currentFigure.isEmpty,
    dispatch,
    fallenFigures,
    isGameActive,
    nextFigure,
  ]);

  useEffect(() => {
    if (currentFigure.isFallen) {
      if (currentFigure.isFallenOnStart) {
        dispatch(setActiveGame(false));
        dispatch(endGame());
      } else {
        dispatch(addFallenFigure(currentFigure));
        dispatch(clearCurrentFigure());
      }
    }
  }, [currentFigure, dispatch]);

  useEffect(() => {
    const timer = setInterval(
      () => dispatch(moveDown(fallenFigures.lines)),
      speed
    );
    if (!isGameActive) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, fallenFigures.lines, isGameActive, speed]);

  const handleKeyUp = (e) => {
    if (e.keyCode === 40) {
      setFigureSpeed(500);
    }
  };

  const handleKeyDown = (e) => {
    if (isGameActive) {
      switch (+e.keyCode) {
        case 37: {
          dispatch(moveLeft(fallenFigures.lines));
          break;
        }
        case 38: {
          if (currentFigure.name !== "square")
            dispatch(rotateFigure(fallenFigures.lines));
          break;
        }
        case 39: {
          dispatch(moveRight(fallenFigures.lines));
          break;
        }
        case 40: {
          setFigureSpeed(60);
          break;
        }
        default:
          break;
      }
    }
  };

  return (
    <PlayingFieldWrapper
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex="0"
      ref={reference}
    >
      <CurrentFigure currentFigure={currentFigure} />

      <FallenFigures fallenFigures={fallenFigures} />
    </PlayingFieldWrapper>
  );
};

PlayingField.propTypes = {
  nextFigure: PropTypes.object,
  isGameActive: PropTypes.bool,
};
PlayingField.defaultProps = {
  nextFigure: {},
  isGameActive: false,
};

export default PlayingField;
