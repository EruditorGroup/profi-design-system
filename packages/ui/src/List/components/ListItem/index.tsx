import React, {createContext, FC, ReactNode, useContext} from 'react';
import styles from './ListItem.module.scss';
import cx from 'classnames';
import {useListContext} from '../../index';
import {Caption} from '../Content/Caption';
import {MainText} from '../Content/MainText';
import {findChildByName} from './utils';

interface ListItemContextType {
  disabled: boolean;
}

const ListItemContext = createContext<ListItemContextType | null>(null);

export const useListItemContext = (): ListItemContextType => {
  const context = useContext(ListItemContext);
  if (!context) throw new Error('Context "ListItemContext" not found');
  return context;
};

interface ComponentType extends FC<ListItemProps> {
  MainText: typeof MainText;
  Caption: typeof Caption;
}

interface ListItemProps {
  disabled?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
}

const noop = () => {
  return '';
};

const ListItem: ComponentType = (props) => {
  const {children, leading, trailing, disabled = false, onClick} = props;
  const {size, bordered, design} = useListContext();

  const isCaption = !!findChildByName(children, Caption.displayName);

  return (
    <li
      className={cx(
        styles['list-item'],
        styles[`size-${size}`],
        styles[`design-${design}`],
        disabled && styles['disabled'],
        bordered && styles['bordered'],
      )}
      tabIndex={!disabled && !!onClick ? 0 : undefined}
      aria-disabled={disabled}
      role="button"
    >
      <div className={styles['body']} onClick={disabled ? noop : onClick}>
        {!!leading && (
          <span
            className={cx(
              styles['leading'],
              !isCaption && styles['without-caption'],
            )}
          >
            {leading}
          </span>
        )}
        <ListItemContext.Provider value={{disabled}}>
          <div className={styles['content']}>{children}</div>
        </ListItemContext.Provider>

        {!!trailing && <span className={styles['trailing']}>{trailing}</span>}
      </div>
    </li>
  );
};

ListItem.MainText = MainText;
ListItem.Caption = Caption;

export default ListItem;
