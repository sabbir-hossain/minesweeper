import {
  LOADING_VIEW,
  LOADING_VIEW_COMPLETE,
  SET_MINE,
} from './drawAction';
import { IDrawReducer } from './IDraw';
import { CustomKeyValue } from '../../commons/IShare';

const initialState: IDrawReducer = {
  isLoaded: false,
  drawSelected: false,
  totalMines: 0,
}

export const drawReducer = (state = initialState, action: CustomKeyValue) => {
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
        totalMines: action.payload?.total || 0
      }
    }
    default:
      return state;
  }
};
