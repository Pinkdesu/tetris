import * as types from "../constants";

let initialState = {
  player: "",
  time: "",
  points: 0,
  speed: 500,
  width: 40,
  isActive: true
};

export const gameSession = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_GAME: {
      return { ...state, ...payload, isActive: true };
    }
    case types.ADD_POINTS: {
      const newPoints = state.points + payload.count * 100;
      return { ...state, points: newPoints };
    }
    case types.END_GAME: {
      return { ...state, isActive: false };
    }
    default:
      return state;
  }
};
