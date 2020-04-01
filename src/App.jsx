import React from "react";
import styled from "styled-components";
import { Table } from "./components/table/table";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Table />
    </Wrapper>
  );
};

export default App;
