import React, {
  createContext,
  useState,
  useMemo,
  forwardRef,
  PropsWithChildren,
} from 'react';
import type {Dispatch, SetStateAction, ForwardRefExoticComponent} from 'react';
import DropdownToggler from './components/DropdownToggler';
import DropdownPortal from './components/DropdownPortal';
import cx from 'classnames';
import styles from './Dropdown.module.css';

export interface IDropdownContext {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export const DropdownContext = createContext<IDropdownContext | null>(null);

export type DropdownProps = PropsWithChildren<{
  className?: string;
}>;

interface DropdownComponent
  extends ForwardRefExoticComponent<
    DropdownProps & React.RefAttributes<IDropdownContext>
  > {
  Toggler: typeof DropdownToggler;
  Portal: typeof DropdownPortal;
}

// additional type cast to flowgen
const Dropdown = forwardRef(({children, className}, ref) => {
  const [isOpened, setOpened] = useState(false);

  const state = useMemo<IDropdownContext>(() => ({isOpened, setOpened}), [
    isOpened,
  ]);

  if (ref) {
    if (typeof ref === 'function') ref(state);
    else if (ref) ref.current = state;
  }

  return (
    <DropdownContext.Provider value={state}>
      <div className={cx(className, styles['relative'])}>{children}</div>
    </DropdownContext.Provider>
  );
}) as DropdownComponent;

Dropdown.Toggler = DropdownToggler;
Dropdown.Portal = DropdownPortal;

export default Dropdown;
