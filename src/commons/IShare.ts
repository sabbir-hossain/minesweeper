import { IDrawReducer } from "../views/draw/IDraw";
import { IGameReducer } from "../views/game/IGame";

export interface CustomKeyValue {
  [key: string]: any;
}

export interface ICustomAction {
  type: string;
  payload?: CustomKeyValue;
}

export type CustomDispatchType = (arg: ICustomAction) => ICustomAction;

export interface IPuzzle {
  value: number;
  cls: string;
  display: string;
}

export type IPuzzleData = IPuzzle | number;

export interface IProcessData {
  data: IPuzzleData[][];
  mineCounter: number;
}

export interface IReducer {
  gameReducer: IGameReducer;
  drawReducer: IDrawReducer;
}
