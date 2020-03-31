import * as types from "../constants";

export const createNextFigure = () => ({
  type: types.CREATE_NEXT_FIGURE
});

export const clearNextFigure = () => ({
  type: types.CLEAR_NEXT_FIGURE
});

export const setCurrentFigure = figure => ({
  type: types.SET_CURRENT_FIGURE,
  payload: figure
});

export const clearCurrentFigure = () => ({
  type: types.CLEAR_CURRENT_FIGURE
});

export const rotateFigure = fallenFigures => ({
  type: types.ROTATE_FIGURE,
  payload: fallenFigures
});

export const moveDown = fallenFigures => ({
  type: types.MOVE_DOWN,
  payload: fallenFigures
});

export const moveLeft = fallenFigures => ({
  type: types.MOVE_LEFT,
  payload: fallenFigures
});

export const moveRight = fallenFigures => ({
  type: types.MOVE_RIGHT,
  payload: fallenFigures
});

export const addFallenFigure = figure => ({
  type: types.ADD_FALLEN_FIGURE,
  payload: figure
});

export const clearFilledLine = () => ({
  type: types.CLEAR_FILLED_LINES
});
