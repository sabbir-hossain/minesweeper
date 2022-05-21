export const LOADING_VIEW = 'LOADING_VIEW';
export const LOADING_VIEW_COMPLETE = 'LOADING_VIEW_COMPLETE';

export const SET_MINE = 'SET_MINE';

export function loadingView(dispatch: any) {
  dispatch({ type: LOADING_VIEW })
}

export function loadingCompleteView(dispatch: any) {
  dispatch({ type: LOADING_VIEW_COMPLETE })
}

export function setMineAction(dispatch: any, total: number) {
  dispatch({ type: SET_MINE, payload: { total } });
}
