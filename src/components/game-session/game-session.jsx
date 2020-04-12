import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import PropTypes from "prop-types";
import {
  SideHeader,
  SideWrapper,
  SideText,
} from "../styled-components/styled-components";

const GameSession = ({ gameSession }) => {
  const { seconds, minutes, hours, start, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (
      gameSession.isGameActive &&
      seconds === 0 &&
      minutes === 0 &&
      hours === 0
    ) {
      start();
      console.log(1);
    }
  }, [gameSession.isGameActive, hours, minutes, seconds, start]);

  return (
    <SideWrapper>
      <SideHeader>Game session</SideHeader>
      <SideText as="span">
        Time: {hours > 9 ? hours : "0" + hours}:
        {minutes > 9 ? minutes : "0" + minutes}:
        {seconds > 9 ? seconds : "0" + seconds}
      </SideText>
      <SideText as="span">Points: {gameSession.points}</SideText>
      <SideText as="span">Speed: {gameSession.speed}</SideText>
      <SideText as="span"></SideText>
    </SideWrapper>
  );
};

GameSession.propTypes = {
  gameSession: PropTypes.object,
};

GameSession.defaultProps = {
  gameSession: {},
};

export default GameSession;
