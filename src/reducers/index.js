import { combineReducers } from "redux";
import currentFigure from "./current-figure";
import { nextFigure } from "./next-figure";

const rootReducer = combineReducers({ currentFigure, nextFigure });

export default rootReducer;
