import { combineReducers } from "redux";
import { currentFigure } from "./current-figure";
import { fallenFigures } from "./fallen-figures";
import { nextFigure } from "./next-figure";

const rootReducer = combineReducers({
  currentFigure,
  nextFigure,
  fallenFigures
});

export default rootReducer;
