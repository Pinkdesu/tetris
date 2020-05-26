import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../../actions/actions";
import {
  StartWindowWrapper,
  StartWindowInput,
  Header,
  Button,
} from "../styled-components/styled-components";
import { addUser } from "../../api/api";

const StartWindow = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleButtonClick = () => {
    if (value !== "") {
      addUser(value);
      dispatch(startGame(value, 40));
    }
  };

  return (
    <StartWindowWrapper>
      <Header>Добро пожаловать, игрок!</Header>
      <StartWindowInput value={value} onChange={handleInputChange} />
      <Button as="button" onClick={handleButtonClick}>
        Начать
      </Button>
    </StartWindowWrapper>
  );
};

export default StartWindow;
