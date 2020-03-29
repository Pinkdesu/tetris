import React, { useState } from "react";
import CurrentFigure from "../current-figure/current-figure";
import { useDispatch, useSelector } from "react-redux";
import {
  rotateFigure,
  moveLeft,
  moveRight,
  moveDown
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

const PlayingField = () => {
  const dispatch = useDispatch();
  const currentFigure = useSelector(state => state.currentFigure);
  const [figureSpeed, setFigureSpeed] = useState(3000);

  const handleKeyUp = e => {
    if (e.keyCode === 40) {
      setFigureSpeed(3000);
    }
  };

  const handleKeyDown = e => {
    switch (+e.keyCode) {
      case 37: {
        dispatch(moveLeft());
        break;
      }
      case 38: {
        dispatch(rotateFigure());
        break;
      }
      case 39: {
        dispatch(moveRight());
        break;
      }
      case 40: {
        //setFigureSpeed(500);
        dispatch(moveDown());
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
      <CurrentFigure figure={currentFigure} speed={figureSpeed} />
    </PlayingFieldWrapper>
  );
};

export default PlayingField;
