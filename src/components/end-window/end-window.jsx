import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EndWindowWrapper,
  Header,
  EndWindowText,
  Button,
  EndWindowContent,
  RatingList,
  RatingListWrapper,
  RatingListItem,
  RatingsWrapper,
} from "../styled-components/styled-components";
import { restartGame, clearSession } from "../../actions/actions";

const EndWindow = () => {
  const gameSession = useSelector((state) => state.gameSession);
  const { hours, minutes, seconds } = gameSession.time;
  const dispatch = useDispatch();

  const handleNewGameClick = () => {
    dispatch(restartGame());
  };

  const handleExitClick = () => {
    dispatch(clearSession());
  };

  return (
    <EndWindowWrapper>
      <Header>Game over!</Header>
      <EndWindowContent>
        <EndWindowText>Ваш результат:</EndWindowText>
      </EndWindowContent>
      <EndWindowText>
        Время: {hours > 9 ? hours : "0" + hours}:
        {minutes > 9 ? minutes : "0" + minutes}:
        {seconds > 9 ? seconds : "0" + seconds}
      </EndWindowText>
      <EndWindowText>Очки: {gameSession.points}</EndWindowText>
      <EndWindowContent>
        <EndWindowText>Результаты:</EndWindowText>
        <RatingsWrapper>
          <RatingListWrapper>
            <EndWindowText>Рейтинг {gameSession.player}:</EndWindowText>
            <RatingList>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>2</RatingListItem>
              <RatingListItem>3</RatingListItem>
              <RatingListItem>3</RatingListItem>
              <RatingListItem>3</RatingListItem>
            </RatingList>
          </RatingListWrapper>
          <RatingListWrapper>
            <EndWindowText>Общий рейтинг:</EndWindowText>
            <RatingList>
              <RatingListItem>1</RatingListItem>
              <RatingListItem>2</RatingListItem>
              <RatingListItem>3</RatingListItem>
              <RatingListItem>3</RatingListItem>
              <RatingListItem>3</RatingListItem>
            </RatingList>
          </RatingListWrapper>
        </RatingsWrapper>
      </EndWindowContent>
      <div>
        <Button as="button" onClick={handleNewGameClick}>
          Новая игра
        </Button>
        <Button as="button" onClick={handleExitClick}>
          Выйти
        </Button>
      </div>
    </EndWindowWrapper>
  );
};

export default EndWindow;
