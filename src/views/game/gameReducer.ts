import { 
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

export const oneMinute = 60 * 1000;
export const fiveMinutes = oneMinute * 5;
export const tenMinutes = oneMinute * 10;
export const twentyMinutes = oneMinute * 20;

const initialState = {
  isLoaded: false,
  startTime: null,
  currentTime: null,
  totalTime: null,
  findMineCount: 0,
  totalMines: 0,
  play: false,
  success: false,
  failed: false,
  failedReason: null,
  flagSelected: false,
};

export const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_GAME: {
      return {
        ...state,
        ...initialState,
        isLoaded: false,
      }
    }
    case LOADING_GAME_COMPLETE: {
      return {
        ...state,
        isLoaded: true,
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
        findMineCount: action.payload.findMineCount
      }
    }
    case GAME_STARTED: {
      return {
        ...state,
        startTime: Date.now(),
        currentTime: Date.now(),
        totalTime: twentyMinutes,
        totalMines: action.payload.totalMines,
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
