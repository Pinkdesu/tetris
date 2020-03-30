import * as types from "../constants";

const initialState = {
  isEmpty: true,
  isFallen: false
};

const findMatch = (checkedX, checkedY, coordsToCheck) => {
  return coordsToCheck.some(({ x, y }) => y === checkedY && x === checkedX);
};

const moveFigure = (coords, deltaX, deltaY, coordsToCheck) => {
  const newCoords = [...coords];

  for (let i = 0; i < newCoords.length; i++) {
    let x = newCoords[i].x + deltaX;
    let y = newCoords[i].y + deltaY;
    let flag = findMatch(x, y, coordsToCheck);
    //проверяем по каакой оси движение
    if (deltaX !== 0 && deltaY === 0) {
      if (x < 0 || x >= 400 || flag) return null; //X
    } else {
      if (y < 0 || y >= 800 || flag) return { isFallen: true }; //Y
    }
    newCoords[i] = { x, y };
  }

  return { coords: newCoords };
};

const rotateFigure = ({ positionCount, position, coords }, coordsToCheck) => {
  let maxX = 0;
  let maxY = 0;
  let newPosition = position < positionCount ? position + 1 : 1;
  let deltaX = newPosition % 2 === 0 ? 80 : 40;
  let newCoords = [...coords];

  newCoords.forEach(coord => {
    if (coord.x > maxX) maxX = coord.x;
    if (coord.y > maxY) maxY = coord.y;
  });

  for (let j = 0; j < newCoords.length; j++) {
    let x = maxX - (deltaX - (maxY - newCoords[j].y));
    let y = maxY - (maxX - newCoords[j].x);
    let flag = findMatch(x, y, coordsToCheck);
    if (x >= 400 || y >= 800 || x < 0 || y < 0 || flag) return null;
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
      return { ...state, ...payload, isEmpty: false };
    }
    case types.ROTATE_FIGURE: {
      const newState = rotateFigure(state, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.MOVE_DOWN: {
      const newState = moveFigure(state.coords, 0, 40, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.MOVE_LEFT: {
      const newState = moveFigure(state.coords, -40, 0, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.MOVE_RIGHT: {
      const newState = moveFigure(state.coords, 40, 0, payload);
      return newState === null ? state : { ...state, ...newState };
    }
    case types.CLEAR_CURRENT_FIGURE: {
      return initialState;
    }
    default:
      return state;
  }
};
