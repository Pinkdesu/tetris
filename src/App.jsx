import React from "react";
import styled from "styled-components";
import { Table } from "./components/table/table";
import { useSelector } from "react-redux";
import StartWindow from "./components/start-window/start-window";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const gameSession = useSelector((state) => state.gameSession);

  return (
    <Wrapper>
      {gameSession.isGameStarted ? (
        <Table gameSession={gameSession} />
      ) : (
        <StartWindow />
      )}
    </Wrapper>
  );
};

export default App;
