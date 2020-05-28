import React, { useState, useEffect } from "react";
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
import { request } from "../../api/api";

const EndWindow = () => {
  const [commonRating, setCommonRating] = useState({
    rating: [],
    isDowland: false,
  });

  const [personalRating, setPersonalRating] = useState({
    rating: [],
    isDowland: false,
  });

  const gameSession = useSelector((state) => state.gameSession);
  const { hours, minutes, seconds } = gameSession.time;
  const dispatch = useDispatch();

  const handleNewGameClick = () => {
    dispatch(restartGame());
  };

  const handleExitClick = () => {
    dispatch(clearSession());
  };

  useEffect(() => {
    request.post(`/ratings/${gameSession.player}`, {
      point: gameSession.points,
    });
    request
      .get("/ratings")
      .then((response) =>
        setCommonRating({ rating: response.data, isDowland: true })
      );
    request
      .get(`/ratings/${gameSession.player}`)
      .then((response) =>
        setPersonalRating({ rating: response.data, isDowland: true })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(commonRating.rating);
  return (
    <EndWindowWrapper>
      <Header>Game over!</Header>
      <EndWindowContent>
        <EndWindowText>Your result:</EndWindowText>
      </EndWindowContent>
      <EndWindowText>
        Time: {hours > 9 ? hours : "0" + hours}:
        {minutes > 9 ? minutes : "0" + minutes}:
        {seconds > 9 ? seconds : "0" + seconds}
      </EndWindowText>
      <EndWindowText>Points: {gameSession.points}</EndWindowText>
      <EndWindowContent>
        <EndWindowText>Results:</EndWindowText>
        <RatingsWrapper>
          {gameSession.serverStatus.isConnected ? (
            <>
              <RatingListWrapper>
                <EndWindowText>{gameSession.player}'s rating:</EndWindowText>
                {personalRating.isDowland ? (
                  <RatingList>
                    {personalRating.rating.map((item, index) => (
                      <RatingListItem key={index}>
                        {item.points} P
                      </RatingListItem>
                    ))}
                  </RatingList>
                ) : (
                  <p>Download...</p>
                )}
              </RatingListWrapper>
              <RatingListWrapper>
                <EndWindowText>Common's rating:</EndWindowText>
                <RatingList>
                  {commonRating.isDowland ? (
                    <RatingList>
                      {commonRating.rating.map((item, index) => (
                        <RatingListItem key={index}>
                          {item.playerName}: {item.points} P
                        </RatingListItem>
                      ))}
                    </RatingList>
                  ) : (
                    <p>Download...</p>
                  )}
                </RatingList>
              </RatingListWrapper>
            </>
          ) : (
            <p>No connection to server.</p>
          )}
        </RatingsWrapper>
      </EndWindowContent>
      <div>
        <Button as="button" onClick={handleNewGameClick}>
          New Game
        </Button>
        <Button as="button" onClick={handleExitClick}>
          Exit
        </Button>
      </div>
    </EndWindowWrapper>
  );
};

export default EndWindow;
