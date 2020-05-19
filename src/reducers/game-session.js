import * as types from "../constants";

let initialState = {
  player: "",
  points: 0,
  speed: 500,
  width: 40,
  time: {
    seconds: 0,
    minutes: 0,
    hours: 0,
  },
  isFirstStart: true,
  isGameStarted: false,
  isGameActive: false,
  isGameFinished: false,
};

export const gameSession = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_GAME: {
      return { ...state, ...payload, isGameStarted: true, isFirstStart: false };
    }
    case types.SET_ACTIVE_GAME: {
      return { ...state, isGameActive: payload.flag };
    }
    case types.ADD_POINTS: {
      const newPoints = state.points + 10 ** payload.count;
      return { ...state, points: newPoints };
    }
    case types.SET_TIME: {
      return { ...state, time: payload };
    }
    case types.END_GAME: {
      return {
        ...state,
        isGameFinished: true,
      };
    }
    default:
      return state;
  }
};
