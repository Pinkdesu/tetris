import * as types from "../constants";

let initialState = {
  name: "default",
  color: "red",
  coords: [],
  isEmpty: true
};

const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const rotateFigure = (startCoords, count) => {
  let maxX = 0;
  let maxY = 0;
  let newCoords = [...startCoords];

  newCoords.forEach(coord => {
    if (coord.x > maxX) maxX = coord.x;
    if (coord.y > maxY) maxY = coord.y;
  });

  end: for (let i = 1; i <= count; i++) {
    let tempCoords = [...newCoords];

    for (let j = 0; j < tempCoords.length; j++) {
      let x = maxX - (160 - (maxY - tempCoords[j].y));
      let y = maxY - (maxX - tempCoords[j].x) - 40;

      if (x >= 400 || y >= 800 || x < 0 || y < 0) break end;
      else {
        tempCoords[j] = { x, y };
      }
    }
    newCoords = [...tempCoords];
  }

  return newCoords;
};

export const nextFigure = (state = initialState, { type }) => {
  switch (type) {
    case types.CREATE_NEXT_FIGURE: {
      let deltaX = 40 * getRandomInRange(0, 8);
      let index = getRandomInRange(0, types.FIGURES.length);
      let position = getRandomInRange(1, types.FIGURES[0].positionCount);
      let color = types.COLORS[getRandomInRange(0, types.COLORS.length)];
      let name = types.FIGURES[index].name;
      let startCoords = types.FIGURES[index].startCoords.map(item => ({
        x: 40 * item.x + deltaX,
        y: 40 * item.y
      }));

      let coords = rotateFigure(startCoords, position);

      return { ...state, name, color, coords, isEmpty: false };
    }
    default:
      return state;
  }
};
