import {
  AliasProps,
  ForwardingComponent,
  ISize,
} from '@eruditorgroup/profi-toolkit';
import React, {createContext, FC, useContext} from 'react';
import ListItem from './components/ListItem';
import styles from './List.module.scss';

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

export type ListProps = Omit<
  React.HTMLAttributes<HTMLUListElement> & (HighDesignProps | LowDesignProps),
  'size'
> & {
  size?: TListItemSize;
};

type HighDesignProps = {
  design: 'high';
  bordered?: boolean;
};

type LowDesignProps = {
  design: 'low';
};

interface ComponentType extends ForwardingComponent<'ul', ListProps> {
  Item: typeof ListItem;
}

const List: ComponentType = function List(props) {
  const {
    children,
    as: Component = 'ul',
    size = 'm',
    design = 'low',
    ...rest
  } = props;

  return (
    <ListContext.Provider
      value={{size, bordered: extractBorderValue(props), design}}
    >
      <Component className={styles['list']} {...rest}>
        {children}
      </Component>
    </ListContext.Provider>
  );
};

const extractBorderValue = (
  props: HighDesignProps | LowDesignProps,
): boolean => {
  return props.design === 'high' ? props.bordered || false : false;
};

List.Item = ListItem;
export default List;
