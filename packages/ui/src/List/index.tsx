import {ForwardingComponent} from '@eruditorgroup/profi-toolkit';
import React from 'react';
import ListItem from './components/ListItem';
import styles from './List.module.scss';
import {TListItemSize, ListContext} from './context';

export type BorderedModeType = 'default' | 'header-borderless';

export type ListProps = Omit<
  React.HTMLAttributes<HTMLUListElement> & (HighDesignProps | LowDesignProps),
  'size'
> & {
  size?: TListItemSize;
  bordered?: boolean;
  borderedMode?: BorderedModeType;
  boldItemMainText?: boolean;
  skeleton?: boolean;
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
    boldItemMainText,
    bordered,
    borderedMode = 'default',
    as: Component = 'ul',
    size = 'm',
    design = 'low',
    skeleton,
    ...rest
  } = props;

  return (
    <ListContext.Provider
      value={{
        size,
        bordered,
        design,
        borderedMode,
        boldItemMainText,
        skeleton,
      }}
    >
      <Component className={styles['list']} {...rest}>
        {children}
      </Component>
    </ListContext.Provider>
  );
};

List.Item = ListItem;
export default List;
