import React from "react";
import styled from "styled-components";
import { Table } from "./components/table/table";
import { useSelector } from "react-redux";
import StartWindow from "./components/start-window/start-window";
import EndWindow from "./end-window/end-window";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { isGameStarted, isFirstStart } = useSelector(
    (state) => state.gameSession
  );

  return (
    <Wrapper>
      {isFirstStart ? <StartWindow /> : null}
      {isGameStarted ? <Table /> : null}
      <EndWindow />
    </Wrapper>
  );
};

export default App;
