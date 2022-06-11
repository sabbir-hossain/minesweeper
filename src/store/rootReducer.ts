import { combineReducers } from "redux";

import { IGameReducer } from "../views/game/IGame";
import { gameReducer } from "../views/game/gameReducer";

import { IDrawReducer } from "../views/draw/IDraw";
import { drawReducer } from "../views/draw/drawReducer";

export interface IReducer {
  gameReducer: IGameReducer;
  drawReducer: IDrawReducer;
}

export default combineReducers({
  gameReducer,
  drawReducer,
});
