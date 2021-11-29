import React, {
  createContext,
  useMemo,
  useRef,
  useCallback,
  MutableRefObject,
  useContext,
} from 'react';
import cx from 'classnames';

import {useControllableState} from '@eruditorgroup/profi-toolkit';
import DropdownToggler from './components/DropdownToggler';
import DropdownPortal from './components/DropdownPortal';
import DropdownItem from './components/DropdownItem';

import type {Dispatch, SetStateAction} from 'react';

import styles from './Dropdown.module.css';

export interface IDropdownContext {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  trigger: 'click' | 'hover';
}

const Context = createContext(false);
export const useDisabledContext = (): boolean => useContext(Context);

export const DropdownContext = createContext<IDropdownContext | null>(null);

export type DropdownProps = {
  className?: string;
  closeRefHandler?: MutableRefObject<(() => void) | undefined>;
  opened?: boolean;
  onChange?: (opened: boolean) => void;
  trigger?: 'click' | 'hover';
  defaultOpened?: boolean;
  styles?: React.CSSProperties;
};

interface DropdownComponent extends React.FC<DropdownProps> {
  Toggler: typeof DropdownToggler;
  Portal: typeof DropdownPortal;
  Item: typeof DropdownItem;
}

const Dropdown: DropdownComponent = ({
  children,
  opened: openedProp,
  onChange,
  className,
  closeRefHandler,
  defaultOpened,
  trigger = 'click',
  ...props
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpened, setOpened] = useControllableState({
    value: openedProp,
    defaultValue: !!defaultOpened,
    onChange,
  });

  const context = useMemo<IDropdownContext>(
    () => ({isOpened, setOpened, trigger}),
    [isOpened, setOpened, trigger],
  );

  useMemo(
    () => closeRefHandler && (closeRefHandler.current = () => setOpened(false)),
    [closeRefHandler, setOpened],
  );

  const onMouseEnter = useCallback(() => {
    if (trigger !== 'hover') return;
    setOpened(true);
  }, [trigger, setOpened]);

  const onMouseLeave = useCallback(() => {
    if (trigger !== 'hover') return;
    setOpened(false);
  }, [trigger, setOpened]);

  return (
    <DropdownContext.Provider value={context}>
      <div
        className={cx(className, styles['relative'])}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={dropdownRef}
        {...props}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Toggler = DropdownToggler;
Dropdown.Portal = DropdownPortal;
Dropdown.Item = DropdownItem;

export default Dropdown;
