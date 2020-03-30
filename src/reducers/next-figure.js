import * as types from "../constants";

const initialState = {
  isEmpty: true
};

const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const nextFigure = (state = initialState, { type }) => {
  switch (type) {
    case types.CREATE_NEXT_FIGURE: {
      const deltaX = 40 * getRandomInRange(0, 8);
      const index = getRandomInRange(0, types.FIGURES.length);
      const positionCount = types.FIGURES[index].positionCount;
      const position = 1;
      const color = types.COLORS[getRandomInRange(0, types.COLORS.length)];
      const name = types.FIGURES[index].name;
      const coords = types.FIGURES[index].startCoords.map(item => ({
        x: 40 * item.x + deltaX,
        y: 40 * item.y
      }));
      return {
        ...state,
        name,
        color,
        positionCount,
        position,
        coords,
        isEmpty: false
      };
    }
    case types.CLEAR_NEXT_FIGURE: {
      return initialState;
    }
    default:
      return state;
  }
};
