import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import { gameReducer } from "../views/game/gameReducer";
import { drawReducer } from "../views/draw/drawReducer";

export default combineReducers({
  gameReducer,
  drawReducer,
  loadingBar: loadingBarReducer,
});
