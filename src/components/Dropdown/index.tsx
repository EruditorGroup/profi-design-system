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

export interface DropdownProps {
  // verticalPosition?: 'top' | 'bottom';
  horizontalPosition?: 'left' | 'right';
  design?: 'light' | 'brand';
}

interface IDropdownContext {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  togglerRef: MutableRefObject<HTMLElement | null>;
  contentRef: MutableRefObject<HTMLElement | null>;
  design?: DropdownProps['design'];
  horizontalPosition?: DropdownProps['horizontalPosition'];
}

// additional type cast to flowgen
export const DropdownContext: Context<IDropdownContext | null> = createContext<IDropdownContext | null>(
  null,
);

export interface DropdownComponent extends FC<DropdownProps> {
  Toggler: typeof DropdownToggler;
  Portal: typeof DropdownPortal;
}

const Dropdown = (({
  children,
  horizontalPosition = 'left',
  design = 'light',
}) => {
  const [isOpened, setOpened] = useState(false);
  const togglerRef = useRef(null);
  const contentRef = useRef(null);

  const state = useMemo<IDropdownContext>(
    () => ({
      isOpened,
      setOpened,
      togglerRef,
      contentRef,
      design,
      horizontalPosition,
    }),
    [isOpened, togglerRef, contentRef, design, horizontalPosition],
  );

  useClickOutside(contentRef, () => isOpened && setOpened(false));

  return (
    <DropdownContext.Provider value={state}>
      {children}
    </DropdownContext.Provider>
  );
}) as DropdownComponent;

Dropdown.Toggler = DropdownToggler;
Dropdown.Portal = DropdownPortal;

export default Dropdown;
