import { getPuzzles } from "../../service/get";
import { CustomDispatchType } from '../../commons/IShare';

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

export const gameLoadingAction = () => (dispatch: CustomDispatchType) => {
  dispatch({ type: LOADING_GAME });
}

export const gameLoadingComplete = () => (dispatch:  CustomDispatchType) => {
  dispatch({ type: LOADING_GAME_COMPLETE });
}

export const resetGame = () => (dispatch: CustomDispatchType ) => {
  dispatch({ type: RESET_GAME })
}

export const gameStarted = (totalMines: number) => (dispatch: CustomDispatchType) => {
  dispatch({ type: GAME_STARTED, payload: { totalMines } });
}

export const loadingGame = () => getPuzzles()

export const setFlagSelected = () => (dispatch: CustomDispatchType) => {
  dispatch({ type: FLAG_SELECTED })
}

export const setFlagUnSelected = () => (dispatch:  CustomDispatchType) => {
  dispatch({ type: FLAG_UNSELECTED })
}

export const countdown = () => (dispatch: CustomDispatchType) => {
  dispatch({ type: GAME_CONTINUING });
}

export const gameTimeout = () => (dispatch:CustomDispatchType) => {
  dispatch({ type: GAME_TIMEOUT });
}

export const gameFailed = () => (dispatch: CustomDispatchType) => {
  dispatch({ type: GAME_FAILED });
}

export const mineFlagSelected = (findMineCount: number) => (dispatch: CustomDispatchType) => {
  dispatch({ type: MINE_SELECTED, payload: { findMineCount } })
}
