import * as types from "../constants";

const initialState = {
  isEmpty: true,
  isFallen: false
};

const findMatch = (checkedX, checkedY, coordsToCheck) => {
  if (checkedY in coordsToCheck) {
    return coordsToCheck[checkedY].some(item => item.x === checkedX);
  }
  return false;
};

const moveFigure = (coords, deltaX, deltaY, coordsToCheck) => {
  const newCoords = [...coords];

  for (let i = 0; i < newCoords.length; i++) {
    let x = newCoords[i].x + deltaX;
    let y = newCoords[i].y + deltaY;
    let flag = findMatch(x, y, coordsToCheck);
    //проверяем по каакой оси движение
    if (deltaX !== 0 && deltaY === 0) {
      if (x < 0 || x >= 10 || flag) return null; //X
    } else {
      if (y < 0 || y >= 20 || flag) return { isFallen: true }; //Y
    }
    newCoords[i] = { x, y };
  }

  return { coords: newCoords };
};

const rotateFigure = ({ positionCount, position, coords }, coordsToCheck) => {
  let maxX = 0;
  let maxY = 0;
  let newPosition = position < positionCount ? position + 1 : 1;
  let deltaX = newPosition % 2 === 0 ? 2 : 1; //чтобы фигура поворачивалась без сдвигов
  let newCoords = [...coords];

  newCoords.forEach(coord => {
    if (coord.x > maxX) maxX = coord.x;
    if (coord.y > maxY) maxY = coord.y;
  });

  for (let j = 0; j < newCoords.length; j++) {
    let x = maxX - (deltaX - (maxY - newCoords[j].y));
    let y = maxY - (maxX - newCoords[j].x);
    let flag = findMatch(x, y, coordsToCheck);
    if (x >= 10 || y >= 20 || x < 0 || y < 0 || flag) return null;
    else {
      newCoords[j] = { x, y };
    }
  }

  return {
    position: newPosition,
    coords: newCoords
  };
};

export const currentFigure = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CURRENT_FIGURE: {
      const { startCoords, deltaX, ...other } = payload;
      const coords = startCoords.map(coord => ({
        x: coord.x + deltaX,
        y: coord.y
      }));

      return { ...state, ...other, coords, isEmpty: false };
    }
    case types.ROTATE_FIGURE: {
      const newState = rotateFigure(state, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.MOVE_DOWN: {
      const newState = moveFigure(state.coords, 0, 1, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.MOVE_LEFT: {
      const newState = moveFigure(state.coords, -1, 0, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.MOVE_RIGHT: {
      const newState = moveFigure(state.coords, 1, 0, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.CLEAR_CURRENT_FIGURE: {
      return initialState;
    }
    default:
      return state;
  }
};
