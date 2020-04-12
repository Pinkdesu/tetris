import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GameSessionWrapper = styled.div`
  width: 25%;
  height: 100%;
`;

const GameSession = ({ gameSession }) => {
  return <GameSessionWrapper></GameSessionWrapper>;
};

GameSession.propTypes = {
  gameSession: PropTypes.object
};

GameSession.defaultProps = {
  gameSession: {}
};

export default GameSession;
