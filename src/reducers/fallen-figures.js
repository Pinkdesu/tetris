import * as types from "../constants";

let initialState = [];

export const fallenFigures = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_FALLEN_FIGURE: {
      const squares = payload.coords.map(coord => ({
        color: payload.color,
        ...coord
      }));

      return [...state, ...squares];
    }
    default:
      return state;
  }
};
