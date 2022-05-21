import { getPuzzles } from "../../service/get";

export const RESET_GAME = 'RESET_GAME';
export const LOADING_GAME = 'LOADING_GAME';
export const LOADING_GAME_COMPLETE = 'LOADING_GAME_COMPLETE';
export const GAME_STARTED = 'GAME_STARTED';
export const GAME_CONTINUING = 'GAME_CONTINUING';
export const GAME_SUCCESS = 'GAME_SUCCESS';
export const GAME_TIMEOUT = 'GAME_TIMEOUT';
export const GAME_FAILED = 'GAME_FAILED';
export const MINE_SELECTED = 'MINE_SELECTED';
export const MINE_UNSELECTED = 'MINE_UNSELECTED';

export const FLAG_SELECTED = 'FLAG_SELECTED';
export const FLAG_UNSELECTED = 'FLAG_UNSELECTED';

export interface IGame {
  value: number;
  cls: string;
  display: string;
}

export function resetGame(dispatch: any) {
  dispatch({ type: RESET_GAME });
}

export function gameStarted(dispatch: any, totalMines: number) {
  dispatch({ type: GAME_STARTED, payload: { totalMines } });
}

export function loadingGame(dispatch: any) {
  dispatch({ type: LOADING_GAME });
  return getPuzzles()
    .then((game) => {
      console.log({ game })
      dispatch({ type: LOADING_GAME_COMPLETE });
      return game;
    })
}

export function setFlagSelected(dispatch: any) {
  return dispatch({ type: FLAG_SELECTED })
}

export function setFlagUnSelected(dispatch: any) {
  return dispatch({ type: FLAG_UNSELECTED })
}

export function countdown(dispatch: any) {
  return dispatch({ type: GAME_CONTINUING });
}

export function gameTimeout(dispatch: any) {
  return dispatch({ type: GAME_TIMEOUT });
}

export function gameFailed(dispatch: any) {
  return dispatch({ type: GAME_FAILED });
}

export function mineFlagSelected(dispatch: any, findMineCount: number) {
  return dispatch({ type: MINE_SELECTED, payload: { findMineCount } })
}
