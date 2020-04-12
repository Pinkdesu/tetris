import * as types from "../constants";

export const startGame = (player, width) => ({
  type: types.START_GAME,
  payload: {
    player,
    width
  }
});

export const addPoints = count => ({
  type: types.ADD_POINTS,
  payload: {
    count
  }
});

export const endGame = () => ({
  type: types.END_GAME
});

export const createNextFigure = () => ({
  type: types.CREATE_NEXT_FIGURE
});

export const clearNextFigure = () => ({
  type: types.CLEAR_NEXT_FIGURE
});

export const setCurrentFigure = (currentFigure, fallenFigures) => ({
  type: types.SET_CURRENT_FIGURE,
  payload: {
    currentFigure,
    fallenFigures
  }
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
