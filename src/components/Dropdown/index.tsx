import React, {createContext, useState, useMemo, useRef} from 'react';
import type {
  Dispatch,
  SetStateAction,
  Context,
  MutableRefObject,
  FC,
} from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import DropdownToggler from './components/DropdownToggler';
import DropdownPortal from './components/DropdownPortal';
import styles from './Dropdown.module.css';

export interface DropdownProps {
  // verticalPosition?: 'top' | 'bottom';
  horizontalPosition?: 'left' | 'right';
  design?: 'light' | 'brand';
}

interface IDropdownContext {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  design?: DropdownProps['design'];
}

// additional type cast to flowgen
export const DropdownContext: Context<IDropdownContext | null> = createContext<IDropdownContext | null>(
  null,
);

export interface DropdownComponent extends FC<DropdownProps> {
  Toggler: typeof DropdownToggler;
  Portal: typeof DropdownPortal;
}

const Dropdown = (({children, design = 'light'}) => {
  const [isOpened, setOpened] = useState(false);

  const state = useMemo<IDropdownContext>(
    () => ({
      isOpened,
      setOpened,
      design,
    }),
    [isOpened, design],
  );

  return (
    <DropdownContext.Provider value={state}>
      <div className={styles['relative']}>{children}</div>
    </DropdownContext.Provider>
  );
}) as DropdownComponent;

Dropdown.Toggler = DropdownToggler;
Dropdown.Portal = DropdownPortal;

export default Dropdown;
