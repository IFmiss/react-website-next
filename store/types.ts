import { BaseStore } from "./type-store";

export interface IActionProps<T> {
  type: String
  data: T
}

export interface IStore {
  base: BaseStore
}
