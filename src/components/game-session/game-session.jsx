import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";
import PropTypes from "prop-types";
import {
  SideHeader,
  SideWrapper,
  SideText,
} from "../styled-components/styled-components";
import { setTime, endGame } from "../../actions/actions";

const GameSession = ({ isGameActive, isGameFinished, speed, points }) => {
  const dispatch = useDispatch();
  const { seconds, minutes, hours, start, pause, isRunning } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (isGameActive && !isGameFinished && !isRunning) {
      start();
    }
    if (!isGameActive && isRunning) {
      pause();
      dispatch(setTime(hours, minutes, seconds));
      dispatch(endGame());
    }
  }, [
    dispatch,
    hours,
    isGameActive,
    isGameFinished,
    isRunning,
    minutes,
    pause,
    seconds,
    start,
  ]);

  return (
    <SideWrapper>
      <SideHeader>Game session</SideHeader>
      <SideText as="span">
        Time: {hours > 9 ? hours : "0" + hours}:
        {minutes > 9 ? minutes : "0" + minutes}:
        {seconds > 9 ? seconds : "0" + seconds}
      </SideText>
      <SideText as="span">Points: {points}</SideText>
      <SideText as="span">Speed: {speed}</SideText>
      <SideText as="span"></SideText>
    </SideWrapper>
  );
};

GameSession.propTypes = {
  isGameActive: PropTypes.bool,
  isGameFinished: PropTypes.bool,
  speed: PropTypes.number,
  points: PropTypes.number,
};

GameSession.defaultProps = {
  isGameActive: false,
  isGameFinished: true,
  speed: 0,
  points: 0,
};

export default GameSession;
