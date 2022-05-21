import { getPuzzles } from "../../service/get";
import { CustomKeyValue } from "../../commons/CustomKeyValue";
import { AppDispatch } from '../../store';

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

/*
export const savingProduct = (formData) => (dispatch, getState) => {
  dispatch(savingProductPending());
  return saveProduct(formData)
    .then((response) => dispatch(savingProductSuccess(response)))
    .catch((error) => dispatch(savingProductError(error)));
};
*/

export const resetGame = () => () => (dispatch: AppDispatch) => dispatch({ type: RESET_GAME });

export const gameStarted = (totalMines: number) => (dispatch: AppDispatch) => {
  dispatch({ type: GAME_STARTED, payload: { totalMines } });
}

export const gameLoadingAction = () => (dispatch: AppDispatch) => dispatch({ type: LOADING_GAME });

export const gameLoadingComplete = () => (dispatch: AppDispatch) => dispatch({ type: LOADING_GAME_COMPLETE });


export const loadingGame = () => getPuzzles()
// {
//   // dispatch(gameLoading());
//   return 
//     // .then((game) => {
//     //   dispatch(gameLoadingComplete());
//     //   dispatch(gameStarted())
//     // })
// }

export const setFlagSelected = () => (dispatch: AppDispatch) => {
  dispatch({ type: FLAG_SELECTED })
}

export const setFlagUnSelected = () => (dispatch: AppDispatch) => {
  dispatch({ type: FLAG_UNSELECTED })
}

export const countdown = () => (dispatch: AppDispatch) => {
  dispatch({ type: GAME_CONTINUING });
}

export const gameTimeout = () => (dispatch: AppDispatch) => {
  dispatch({ type: GAME_TIMEOUT });
}

export const gameFailed = () => (dispatch: AppDispatch) => {
  dispatch({ type: GAME_FAILED });
}

export const mineFlagSelected = () => (dispatch: AppDispatch, findMineCount: number) => {
  dispatch({ type: MINE_SELECTED, payload: { findMineCount } })
}
