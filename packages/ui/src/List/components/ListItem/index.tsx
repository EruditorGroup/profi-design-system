import React, {
  createContext,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  useContext,
} from 'react';
import styles from './ListItem.module.scss';
import cx from 'classnames';
import {useListContext} from '../../index';
import {Caption} from '../Content/Caption';
import {MainText} from '../Content/MainText';
import {findChildByName} from './utils';

const ListItemContext = createContext<boolean>(null);

export const useListItemContext = (): boolean => {
  return useContext(ListItemContext);
};

interface ComponentType
  extends ForwardRefExoticComponent<
    ListItemProps & RefAttributes<HTMLLIElement>
  > {
  MainText: typeof MainText;
  Caption: typeof Caption;
}

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  disabled?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const ListItem: ComponentType = forwardRef((props, ref) => {
  const {
    children,
    leading,
    trailing,
    disabled = false,
    onClick,
    className,
    ...rest
  } = props;
  const {size, bordered, design} = useListContext();

  const isCaption = !!findChildByName(children, Caption.displayName);

  return (
    <li
      {...rest}
      className={cx(
        styles['list-item'],
        styles[`size-${size}`],
        styles[`design-${design}_size-${size}`],
        disabled && styles['disabled'],
        bordered && styles['bordered'],
        className,
      )}
      tabIndex={!disabled && !!onClick ? 0 : undefined}
      aria-disabled={disabled}
      role="button"
      onClick={disabled ? noop : onClick}
      ref={ref}
    >
      <div className={styles['body']}>
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
        <ListItemContext.Provider value={disabled}>
          <div className={styles['content']}>{children}</div>
        </ListItemContext.Provider>

        {!!trailing && <span className={styles['trailing']}>{trailing}</span>}
      </div>
    </li>
  );
}) as ComponentType;

ListItem.MainText = MainText;
ListItem.Caption = Caption;

export default ListItem;
