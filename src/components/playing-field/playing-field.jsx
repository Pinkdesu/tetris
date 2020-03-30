import React, { useState, useEffect } from "react";
import CurrentFigure from "../current-figure/current-figure";
import FallenFigures from "../fallen-figures/fallen-figures";
import { useDispatch, useSelector } from "react-redux";
import {
  rotateFigure,
  moveLeft,
  moveRight,
  moveDown,
  setCurrentFigure,
  clearNextFigure,
  clearCurrentFigure,
  addFallenFigure
} from "../../actions/actions";
import styled from "styled-components";

const PlayingFieldWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  outline: none;
`;

const PlayingField = ({ nextFigure }) => {
  const [figureSpeed, setFigureSpeed] = useState(1000);
  const dispatch = useDispatch();
  const currentFigure = useSelector(state => state.currentFigure);
  const fallenFigures = useSelector(state => state.fallenFigures);

  useEffect(() => {
    if (!nextFigure.isEmpty && currentFigure.isEmpty) {
      dispatch(setCurrentFigure(nextFigure));
      dispatch(clearNextFigure());
    }
  }, [currentFigure.isEmpty, dispatch, nextFigure]);

  useEffect(() => {
    if (currentFigure.isFallen) {
      dispatch(addFallenFigure(currentFigure));
      dispatch(clearCurrentFigure());
    }
  }, [currentFigure, dispatch]);

  const handleKeyUp = e => {
    if (e.keyCode === 40) {
      setFigureSpeed(500);
    }
  };

  const handleKeyDown = e => {
    switch (+e.keyCode) {
      case 37: {
        dispatch(moveLeft(fallenFigures));
        break;
      }
      case 38: {
        if (currentFigure.name !== "square") dispatch(rotateFigure());
        break;
      }
      case 39: {
        dispatch(moveRight(fallenFigures));
        break;
      }
      case 40: {
        dispatch(moveDown(fallenFigures));
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
    >
      <CurrentFigure figure={currentFigure} />

      <FallenFigures figures={fallenFigures} />
    </PlayingFieldWrapper>
  );
};

export default PlayingField;
