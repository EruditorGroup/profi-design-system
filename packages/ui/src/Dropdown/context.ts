import {createContext, Dispatch, SetStateAction, useContext} from "react";

export interface IDropdownContext {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  trigger: 'click' | 'hover';
}

const Context = createContext(false);
export const useDisabledContext = (): boolean => useContext(Context);

export const DropdownContext = createContext<IDropdownContext | null>(null);
