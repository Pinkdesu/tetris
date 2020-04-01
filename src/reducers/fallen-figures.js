import * as types from "../constants";

let initialState = { lines: {}, filledLines: [] };

export const fallenFigures = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_FALLEN_FIGURE: {
      const lines = { ...state.lines };
      const filledLines = [];

      for (let i = 0; i < payload.coords.length; i++) {
        let { x, y } = payload.coords[i];
        let item = { x: x, color: payload.color };

        if (y in lines) {
          lines[y].push(item);
          if (lines[y].length === 10) filledLines.push(y);
        } else {
          lines[y] = [item];
        }
      }

      return { lines, filledLines };
    }
    case types.CLEAR_FILLED_LINES: {
      const lines = { ...state.lines };
      const filledLines = [...state.filledLines];

      for (let i = 0; i < filledLines.length; i++) {
        let newLine = [];

        for (let key in lines) {
          let tempLine = [];

          if (+key <= +filledLines[i]) {
            tempLine = [...lines[key]];
            if (newLine.length === 0) delete lines[key];
            else lines[key] = newLine;
            newLine = [...tempLine];
          } else break;
        }
      }

      return { lines, filledLines: [] };
    }
    default:
      return state;
  }
};
