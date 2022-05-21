import {
  LOADING_VIEW,
  LOADING_VIEW_COMPLETE,
  SET_MINE,
} from './drawAction';

const initialState = {
  isLoaded: false,
  drawSelected: false,
  totalMines: 0,
}

export const drawReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_VIEW: {
      return {
        ...state,
        ...initialState,
        isLoaded: false
      }
    }
    case LOADING_VIEW_COMPLETE: {
      return {
        ...state,
        isLoaded: true,
        drawSelected: true,
        totalMines: 0
      }
    }
    case SET_MINE: {
      return {
        ...state,
        totalMines: action.payload.total
      }
    }
    default:
      return state;
  }
};
