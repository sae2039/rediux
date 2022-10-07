import { ActionType } from "./actionType";

interface actionType {
  type: ActionType.DEC | ActionType.INC;
  payload: number;
}

interface restetType {
  type: ActionType.RES;
}
export interface stateType {
  counter: number;
}
export type counterReducerType = actionType | restetType;
