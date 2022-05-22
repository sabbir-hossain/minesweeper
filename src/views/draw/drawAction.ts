import { CustomDispatchType } from "../../commons/IShare";

export const LOADING_VIEW = 'LOADING_VIEW';
export const LOADING_VIEW_COMPLETE = 'LOADING_VIEW_COMPLETE';

export const SET_MINE = 'SET_MINE';

export const loadingView = () => (dispatch: CustomDispatchType ) => {
  dispatch({ type: LOADING_VIEW })
}

export const loadingCompleteView = () => (dispatch: CustomDispatchType ) => {
  dispatch({ type: LOADING_VIEW_COMPLETE })
}

export const setMineAction = (total: number) => (dispatch: CustomDispatchType ) => {
  dispatch({ type: SET_MINE, payload: { total } });
}
