import { 
  RESET_GAME,
  LOADING_GAME,
  LOADING_GAME_COMPLETE,
  GAME_STARTED,
  GAME_CONTINUING,
  GAME_SUCCESS,
  GAME_TIMEOUT,
  GAME_FAILED,
  FLAG_SELECTED,
  FLAG_UNSELECTED,
  MINE_SELECTED,
} from './gameAction';
import { IGameReducer } from './IGame';
import { ICustomAction } from '../../commons/IShare';

export const oneMinute = 60 * 1000;
export const twoMinute = oneMinute * 2;
export const fiveMinutes = oneMinute * 5;
export const tenMinutes = oneMinute * 10;
export const twentyMinutes = oneMinute * 20;
export const thirtyMinutes = oneMinute * 30;

const initialState: IGameReducer = {
  isLoaded: false,
  playSelected: false,
  startTime: 0,
  currentTime: 0,
  totalTime: 0,
  findMineCount: 0,
  totalMines: 0,
  play: false,
  success: false,
  failed: false,
  failedReason: '',
  flagSelected: false,
};

export const gameReducer = (state: IGameReducer = initialState, action: ICustomAction) => {
  switch (action.type) {
    case LOADING_GAME: {
      return {
        ...state,
        ...initialState,
        isLoaded: false,
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        ...initialState,
        isLoaded: false,
        playSelected: false,
      }
    }
    case LOADING_GAME_COMPLETE: {
      return {
        ...state,
        isLoaded: true,
        playSelected: true,
      }
    }
    case FLAG_SELECTED: {
      return {
        ...state,
        flagSelected: true
      }
    }
    case FLAG_UNSELECTED: {
      return {
        ...state,
        flagSelected: false
      }
    }
    case MINE_SELECTED: {
      return {
        ...state,
        findMineCount: action.payload?.findMineCount || 0
      }
    }
    case GAME_STARTED: {
      return {
        ...state,
        startTime: Date.now(),
        currentTime: Date.now(),
        totalTime: fiveMinutes,
        totalMines: action.payload?.totalMines || 0,
        play: true,
        success: false,
        failed: false,
        failedReason: null,
      };
    }
    case GAME_CONTINUING: {
      return {
        ...state,
        currentTime: Date.now(),
      };
    }
    case GAME_SUCCESS: {
      return {
        ...state,
        play: false,
        success: true,
        failed: false,
        failedReason: '',
      }
    }
    case GAME_TIMEOUT: {
      return {
        ...state,
        play: false,
        failed: true,
        failedReason: 'timeout',
      }
    }
    case GAME_FAILED: {
      return {
        ...state,
        play: false,
        success: false,
        failed: true,
        failedReason: 'failed',
      }
    }
    default:
      return state;
  }
};
