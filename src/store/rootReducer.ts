import { combineReducers } from "redux";

import { gameReducer } from "../views/game/gameReducer";
import { drawReducer } from "../views/draw/drawReducer";

export default combineReducers({
  gameReducer,
  drawReducer,
});
