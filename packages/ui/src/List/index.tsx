import {ForwardingComponent, ISize} from '@eruditorgroup/profi-toolkit';
import React, {createContext, useContext} from 'react';
import ListItem from './components/ListItem';
import styles from './List.module.scss';

type TListItemSize = Extract<ISize, 'm' | 'l'>;
type TListDesign = 'high' | 'low';
export type BorderedModeType = 'default' | 'header-borderless';

interface ListContextType {
  size: TListItemSize;
  bordered: boolean;
  design: TListDesign;
  borderedMode: BorderedModeType;
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
  bordered?: boolean;
  borderedMode?: BorderedModeType;
};

type HighDesignProps = {
  design: 'high';
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
    bordered,
    borderedMode = 'default',
    as: Component = 'ul',
    size = 'm',
    design = 'low',
    ...rest
  } = props;

  return (
    <ListContext.Provider value={{size, bordered, design, borderedMode}}>
      <Component className={styles['list']} {...rest}>
        {children}
      </Component>
    </ListContext.Provider>
  );
};

List.Item = ListItem;
export default List;
