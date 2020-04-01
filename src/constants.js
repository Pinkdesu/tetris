export const START_GAME = "START_GAME";

export const CREATE_NEXT_FIGURE = "CREATE_NEXT_FIGURE";
export const CLEAR_NEXT_FIGURE = "CLEAR_NEXT_FIGURE";
export const SET_CURRENT_FIGURE = "SET_CURRENT_FIGURE";
export const CLEAR_CURRENT_FIGURE = "CLEAR_CURRENT_FIGURE";
export const CLEAR_FILLED_LINES = "CLEAR_FILLED_LINES";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const ROTATE_FIGURE = "ROTATE_FIGURE";
export const ADD_FALLEN_FIGURE = "ADD_FALLEN_FIGURE";

export const COLORS = [
  "#ff8a80",
  "#ff5252",
  "#ff1744",
  "#d50000",
  "#ff80ab",
  "#ff4081",
  "#f50057",
  "#c51162",
  "#ea80fc",
  "#e040fb",
  "#d500f9",
  "#aa00ff",
  "#b388ff",
  "#7c4dff",
  "#651fff",
  "#6200ea",
  "#8c9eff",
  "#536dfe",
  "#3d5afe",
  "#304ffe"
];

export const FIGURES = [
  {
    name: "square",
    positionCount: 1,
    startWidth: 2,
    startHeight: 2,
    startCoords: [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 1
      },
      {
        x: 1,
        y: 0
      },
      {
        x: 1,
        y: 1
      }
    ]
  },
  {
    name: "line",
    positionCount: 2,
    startWidth: 1,
    startHeight: 4,
    startCoords: [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 1
      },
      {
        x: 0,
        y: 2
      },
      {
        x: 0,
        y: 3
      }
    ]
  },
  {
    name: "t-junction",
    positionCount: 4,
    startWidth: 3,
    startHeight: 2,
    startCoords: [
      {
        x: 1,
        y: 0
      },
      {
        x: 0,
        y: 1
      },
      {
        x: 1,
        y: 1
      },
      {
        x: 2,
        y: 1
      }
    ]
  },
  {
    name: "zigzag",
    positionCount: 2,
    startWidth: 3,
    startHeight: 2,
    startCoords: [
      {
        x: 0,
        y: 0
      },
      {
        x: 1,
        y: 0
      },
      {
        x: 1,
        y: 1
      },
      {
        x: 2,
        y: 1
      }
    ]
  },
  {
    name: "re-zigzag",
    positionCount: 2,
    startWidth: 3,
    startHeight: 2,
    startCoords: [
      {
        x: 2,
        y: 0
      },
      {
        x: 1,
        y: 0
      },
      {
        x: 1,
        y: 1
      },
      {
        x: 0,
        y: 1
      }
    ]
  },
  {
    name: "angle",
    positionCount: 4,
    startWidth: 2,
    startHeight: 3,
    startCoords: [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 1
      },
      {
        x: 0,
        y: 2
      },
      {
        x: 1,
        y: 2
      }
    ]
  },
  {
    name: "re-angle",
    positionCount: 4,
    startWidth: 2,
    startHeight: 3,
    startCoords: [
      {
        x: 1,
        y: 0
      },
      {
        x: 1,
        y: 1
      },
      {
        x: 1,
        y: 2
      },
      {
        x: 0,
        y: 2
      }
    ]
  }
];
