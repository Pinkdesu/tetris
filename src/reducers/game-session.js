import * as types from "../constants";

let initialState = {
  player: "",
  time: {
    seconds: 3,
    minutes: 0,
    hours: 0,
  },
  points: 0,
  speed: 500,
  width: 40,
  isGameActive: false,
  isGameStarted: false,
};

export const gameSession = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_GAME: {
      return { ...state, ...payload, isGameStarted: true };
    }
    case types.SET_ACTIVE_GAME: {
      return { ...state, isGameActive: true };
    }
    case types.ADD_POINTS: {
      const newPoints = state.points + 10 ** payload.count;
      return { ...state, points: newPoints };
    }
    case types.SET_TIME: {
      return { ...state, time: payload };
    }
    case types.END_GAME: {
      return { ...state, isActive: false };
    }
    default:
      return state;
  }
};
