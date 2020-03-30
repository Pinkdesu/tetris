import * as types from "../constants";
import { rotateFigure } from "./next-figure";

const initialState = {
  isEmpty: true
};

const currentFigure = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CURRENT_FIGURE: {
      return { ...state, ...payload, isEmpty: false };
    }
    case types.ROTATE_FIGURE: {
      const figure = rotateFigure(state);
      return { ...state, ...figure };
    }
    case types.MOVE_DOWN: {
      const newCoords = state.coords.map(item => ({
        x: item.x,
        y: item.y + 40
      }));

      return { ...state, coords: newCoords };
    }
    case types.MOVE_LEFT: {
      const newCoords = state.coords.map(item => ({
        x: item.x - 40,
        y: item.y
      }));
      return { ...state, coords: newCoords };
    }
    case types.MOVE_RIGHT: {
      const newCoords = state.coords.map(item => ({
        x: item.x + 40,
        y: item.y
      }));
      return { ...state, coords: newCoords };
    }
    default:
      return state;
  }
};

export default currentFigure;
