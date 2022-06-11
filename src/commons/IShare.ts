export interface CustomKeyValue {
  [key: string]: any;
}

export interface ICustomAction {
  type: string;
  payload?: CustomKeyValue;
}

export type CustomDispatchType = (arg: ICustomAction) => ICustomAction;

export interface IPuzzle {
  value: number;
  cls: string;
  display: string | number;
}

export type IPuzzleData = IPuzzle | number;

export interface IProcessData {
  data: IPuzzleData[][];
  mineCounter: number;
}
