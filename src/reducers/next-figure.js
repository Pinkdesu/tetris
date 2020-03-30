import * as types from "../constants";

const initialState = {
  isEmpty: true
};

const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const rotateFigure = ({ positionCount, position, coords }) => {
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

    if (x >= 400 || y >= 800 || x < 0 || y < 0) return { position, coords };
    else {
      newCoords[j] = { x, y };
    }
  }

  return {
    position: newPosition,
    coords: newCoords
  };
};

export const nextFigure = (state = initialState, { type }) => {
  switch (type) {
    case types.CREATE_NEXT_FIGURE: {
      const deltaX = 40 * getRandomInRange(0, 8);
      const index = getRandomInRange(0, types.FIGURES.length);
      const positionCount = types.FIGURES[index].positionCount;
      const position = 1; //getRandomInRange(1, positionCount);
      const color = types.COLORS[getRandomInRange(0, types.COLORS.length)];
      const name = types.FIGURES[index].name;
      const coords = types.FIGURES[index].startCoords.map(item => ({
        x: 40 * item.x + deltaX,
        y: 40 * item.y
      }));

      //const coords = rotateFigure(startCoords, 2, position);

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
    default:
      return state;
  }
};
