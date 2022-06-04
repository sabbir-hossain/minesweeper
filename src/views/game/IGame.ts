export interface IGame {
  value: number;
  cls: string;
  display: string;
}

export interface IGameReducer {
  isLoaded: boolean;
  playSelected: boolean;
  startTime: number;
  currentTime: number;
  totalTime: number;
  findMineCount: number;
  totalMines: number;
  play: boolean;
  success: boolean;
  failed: boolean;
  failedReason: string;
  flagSelected: boolean;
}
