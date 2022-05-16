import { getPuzzles } from "../../service/get";

export const LOADING_GAME = 'LOADING_GAME';
export const LOADING_GAME_COMPLETE = 'LOADING_GAME_COMPLETE';
export const GAME_STARTED = 'GAME_STARTED';
export const GAME_CONTINUING = 'GAME_CONTINUING';
export const GAME_SUCCESS = 'GAME_SUCCESS';
export const GAME_TIMEOUT = 'GAME_TIMEOUT';
export const GAME_FAILED = 'GAME_FAILED';

export const FLAG_SELECTED = 'FLAG_SELECTED';
export const FLAG_UNSELECTED = 'FLAG_UNSELECTED';

export interface IGame {
  value: number;
  cls: string;
  display: string;
}

export function gameStarted(dispatch: any) {
    dispatch({type: GAME_STARTED});
}

export function loadingGame( dispatch: any) {
  dispatch({type: LOADING_GAME});
  return getPuzzles()
    .then((game) => {
      dispatch({type: LOADING_GAME_COMPLETE});
      return game;
    })
}

export function setFlagSelected(dispatch: any) {
  return dispatch({type: FLAG_SELECTED })
}

export function setFlagUnSelected(dispatch: any) {
  return dispatch({type: FLAG_UNSELECTED })
}

export function countdown(dispatch: any) {
  return dispatch({type: GAME_CONTINUING});
}

export function gameTimeout(dispatch: any) {
  return dispatch({type: GAME_TIMEOUT});
}

export function gameFailed(dispatch: any) {
  return dispatch({type: GAME_FAILED});
}