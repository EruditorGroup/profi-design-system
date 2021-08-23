import React, {
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  useContext,
} from 'react';
import styles from './ListItem.module.scss';
import cx from 'classnames';
import {useListContext} from '../../index';
import {Caption} from '../Content/Caption';
import {MainText} from '../Content/MainText';
import {findChildByName} from './utils';
import {AliasProps, ForwardingComponent} from '@eruditorgroup/profi-toolkit';

const ListItemContext = createContext<boolean>(null);

export const useListItemContext = (): boolean => {
  return useContext(ListItemContext);
};

type WithChidlrenComponent<MainComponentType> = {
  MainText: typeof MainText;
  Caption: typeof Caption;
} & MainComponentType;

type ExoticRefComponentType = WithChidlrenComponent<
  ForwardRefExoticComponent<ListItemProps>
>;

type ForwardingComponentType = WithChidlrenComponent<
  ForwardingComponent<'li', ListItemProps>
>;

export interface ListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    AliasProps {
  disabled?: boolean;
  active?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const ListItem: ForwardingComponentType = forwardRef((props, ref) => {
  const {
    children,
    leading,
    trailing,
    disabled = false,
    active,
    onClick,
    className,
    as: Component = 'li',
    ...rest
  } = props;
  const {size, bordered, design, borderedMode} = useListContext();

  const isCaption = !!findChildByName(children, Caption.displayName);
  const isMainText = !!findChildByName(children, MainText.displayName);

  const wrappedChildren = !isMainText ? (
    <MainText>{children}</MainText>
  ) : (
    children
  );

  return (
    <Component
      {...rest}
      className={cx(
        styles['list-item'],
        styles[`size-${size}`],
        styles[`design-${design}_size-${size}`],
        disabled && styles['disabled'],
        bordered && styles['bordered'],
        styles[borderedMode],
        active && styles['active'],
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
          <div className={styles['content']}>{wrappedChildren}</div>
        </ListItemContext.Provider>

        {!!trailing && <span className={styles['trailing']}>{trailing}</span>}
      </div>
    </Component>
  );
}) as ExoticRefComponentType;

ListItem.MainText = MainText;
ListItem.Caption = Caption;

export default ListItem;
