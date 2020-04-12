import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../../actions/actions";
import {
  StartWindowWrapper,
  StartWindowInput,
  StartWindowHeader,
  StartWindowButton,
} from "../styled-components/styled-components";

const StartWindow = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleButtonClick = () => {
    if (value !== "") {
      dispatch(startGame(value, 40));
    }
  };

  return (
    <StartWindowWrapper>
      <StartWindowHeader>Добро пожаловать, игрок!</StartWindowHeader>
      <StartWindowInput value={value} onChange={handleInputChange} />
      <StartWindowButton as="button" onClick={handleButtonClick}>
        Начать
      </StartWindowButton>
    </StartWindowWrapper>
  );
};

export default StartWindow;
