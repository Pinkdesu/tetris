import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const EndWindow = () => {
  const gameSession = useSelector((state) => state.gameSession);
  const dispatch = useDispatch();

  return (
    <h1 style={{ display: gameSession.isGameFinished ? "block" : "none" }}>
      End
    </h1>
  );
};

export default EndWindow;
