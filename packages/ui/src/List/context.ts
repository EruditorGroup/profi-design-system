import {createContext, useContext} from "react";
import {BorderedModeType} from "./index";
import {ISize} from "@eruditorgroup/profi-toolkit";

export type TListItemSize = Extract<ISize, 'm' | 'l'>;
type TListDesign = 'high' | 'low';

interface ListContextType {
  size: TListItemSize;
  bordered: boolean;
  design: TListDesign;
  borderedMode: BorderedModeType;
  boldItemMainText: boolean;
  skeleton?: boolean;
}

export const ListContext = createContext<ListContextType | null>(null);

export const useListContext = (): ListContextType => {
  const context = useContext(ListContext);
  if (!context) throw new Error('Context "ListContext" not found');
  return context;
};
