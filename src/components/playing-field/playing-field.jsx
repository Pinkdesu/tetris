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
  endGame,
} from "../../actions/actions";
import { PlayingFieldWrapper } from "../styled-components/styled-components";

const PlayingField = ({ nextFigure }) => {
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
      dispatch(setCurrentFigure(nextFigure, fallenFigures));
      dispatch(clearNextFigure());
    }
  }, [currentFigure.isEmpty, dispatch, fallenFigures, nextFigure]);

  useEffect(() => {
    if (currentFigure.isFallen) {
      if (currentFigure.isFallenOnStart) {
        dispatch(endGame());
      } else {
        dispatch(addFallenFigure(currentFigure));
        dispatch(clearCurrentFigure());
      }
    }
  }, [currentFigure, dispatch]);

  useEffect(() => {
    const timerId = setInterval(
      () => dispatch(moveDown(fallenFigures.lines)),
      speed
    );

    return () => {
      clearTimeout(timerId);
    };
  }, [dispatch, fallenFigures.lines, speed]);

  const handleKeyUp = (e) => {
    if (e.keyCode === 40) {
      setFigureSpeed(500);
    }
  };

  const handleKeyDown = (e) => {
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
};
PlayingField.defaultProps = {
  nextFigure: {},
};

export default PlayingField;
