import * as types from "../constants";

export const setCurrentFigure = (figure, color) => ({
  type: types.SET_CURRENT_FIGURE,
  payload: {
    ...figure,
    color
  }
});

export const moveDown = () => ({
  type: types.MOVE_DOWN
});

export const moveLeft = () => ({
  type: types.MOVE_LEFT
});

export const moveRight = () => ({
  type: types.MOVE_RIGHT
});
