import * as types from "../constants";

let initialState = {
  time: "",
  points: 0,
  speed: 500,
  width: 40,
  isAtive: false
};

export const gameSession = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_GAME: {
      return;
    }
    default:
      return state;
  }
};
