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
  clearFilledLine
} from "../../actions/actions";
import styled from "styled-components";

const PlayingFieldWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  outline: none;
`;

const PlayingField = ({ nextFigure }) => {
  const [speed, setFigureSpeed] = useState(500);
  const reference = useRef(null);
  const dispatch = useDispatch();
  const currentFigure = useSelector(state => state.currentFigure);
  const fallenFigures = useSelector(state => state.fallenFigures);

  useEffect(() => {
    reference.current.focus();
  }, []);

  useEffect(() => {
    if (!nextFigure.isEmpty && currentFigure.isEmpty) {
      console.log(1);
      dispatch(setCurrentFigure(nextFigure));
      dispatch(clearNextFigure());
    }
  }, [currentFigure.isEmpty, dispatch, nextFigure]);

  useEffect(() => {
    if (fallenFigures.filledLines.length !== 0) {
      dispatch(clearFilledLine());
    }
  }, [dispatch, fallenFigures.filledLines]);

  useEffect(() => {
    if (currentFigure.isFallen) {
      dispatch(addFallenFigure(currentFigure));
      dispatch(clearCurrentFigure());
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

  const handleKeyUp = e => {
    if (e.keyCode === 40) {
      setFigureSpeed(500);
    }
  };

  const handleKeyDown = e => {
    switch (+e.keyCode) {
      case 37: {
        dispatch(moveLeft(fallenFigures.lines));
        break;
      }
      case 38: {
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
      <CurrentFigure figure={currentFigure} />

      <FallenFigures figures={fallenFigures.lines} />
    </PlayingFieldWrapper>
  );
};

PlayingField.propTypes = {
  nextFigure: PropTypes.object,
  width: PropTypes.number
};
PlayingField.defaultProps = {
  nextFigure: {},
  width: 40
};

export default PlayingField;
