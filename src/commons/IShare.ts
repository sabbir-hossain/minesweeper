export interface CustomKeyValue {
  [key: string]: any;
}


export interface ICustomAction {
  type: string;
  payload?: CustomKeyValue;
}

export type CustomDispatchType = (arg: ICustomAction) => ICustomAction;