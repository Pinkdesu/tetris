import * as types from "../constants";

export const createNextFigure = () => ({
  type: types.CREATE_NEXT_FIGURE
});

export const setCurrentFigure = figure => ({
  type: types.SET_CURRENT_FIGURE,
  payload: figure
});

export const rotateFigure = () => ({
  type: types.ROTATE_FIGURE
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
