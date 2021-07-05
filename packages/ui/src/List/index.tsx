import React, {createContext, FC, useContext} from 'react';
import {ISize} from 'uitype';
import ListItem from './components/ListItem';

type TListItemSize = Extract<ISize, 'm' | 'l'>;
type TListDesign = 'high' | 'low';

interface ListContextType {
  size: TListItemSize;
  bordered: boolean;
  design: TListDesign;
}

const ListContext = createContext<ListContextType | null>(null);

export const useListContext = (): ListContextType => {
  const context = useContext(ListContext);
  if (!context) throw new Error('Context "ListContext" not found');
  return context;
};

export type ListProps = {
  size?: TListItemSize;
} & (HighDesignProps | LowDesignProps);

type HighDesignProps = {
  design: 'high';
  bordered?: boolean;
};

type LowDesignProps = {
  design: 'low';
};

interface ComponentType extends FC<ListProps> {
  Item: typeof ListItem;
}

const List: ComponentType = (props) => {
  const {children, size = 'm', design = 'low'} = props;

  return (
    <ListContext.Provider
      value={{size, bordered: extractBorderValue(props), design}}
    >
      <ul>{children}</ul>
    </ListContext.Provider>
  );
};

const extractBorderValue = (props: ListProps): boolean => {
  return props.design === 'high' ? props.bordered || false : false;
};

List.Item = ListItem;
export default List;
