export const CREATE_NEXT_FIGURE = "CREATE_NEXT_FIGURE";
export const SET_CURRENT_FIGURE = "SET_CURRENT_FIGURE";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const ROTATE_FIGURE = "ROTATE_FIGURE";

export const COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "gold",
  "pink"
];
export const FIGURES = [
  {
    name: "square",
    positionCount: 1,
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
