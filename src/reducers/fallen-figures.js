import * as types from "../constants";

let initialState = {};

export const fallenFigures = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_FALLEN_FIGURE: {
      const newState = { ...state };

      for (let i = 0; i < payload.coords.length; i++) {
        let { x, y } = payload.coords[i];
        let item = { x: x, color: payload.color };

        if (y in newState) {
          newState[y].push(item);
        } else {
          newState[y] = [item];
        }
      }

      return { ...state, ...newState };
    }
    case types.CLEAR_FILLED_LINES: {
      const filledLines = [];

      for (let key in state) {
        if (state[key].length === 10) {
          filledLines.push(key);
        }
      }

      if (filledLines.length !== 0) {
        const tempState = { ...state };

        for (let i = 0; i < filledLines.length; i++) {
          let newLine = [];

          for (let key in tempState) {
            let tempLine = [];
            if (key <= filledLines[i]) {
              tempLine = [...tempState[key]];
              if (newLine.length === 0) delete tempState[key];
              else tempState[key] = newLine;
              newLine = [...tempLine];
            } else break;
          }
        }

        return { ...tempState };
      }

      return state;
    }
    default:
      return state;
  }
};
