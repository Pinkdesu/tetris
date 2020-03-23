import * as types from "../constants";

let initialState = {
  name: "test",
  color: "red",
  coords: [
    {
      x: 0,
      y: 0
    },
    {
      x: 40,
      y: 0
    },
    {
      x: 80,
      y: 0
    },
    {
      x: 40,
      y: 40
    }
  ]
};

const currentFigure = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CURRENT_FIGURE: {
      return { ...state, ...payload };
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
