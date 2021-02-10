import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
} from 'react';
import useClickOutside from '../../hooks/useClickOutside';

export interface DropdownProps {
  verticalPosition?: 'top' | 'bottom';
  horizontalPosition?: 'left' | 'right';
  opened?: boolean;
  children?: React.ReactNode;
}

interface DropdownContext<T extends HTMLElement = HTMLElement> {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  togglerRef: React.MutableRefObject<T | null>;
  contentRef: React.MutableRefObject<T | null>;
}

export const DropdownContext = createContext<DropdownContext | null>(null);

const Dropdown = ({opened, children}: DropdownProps): React.ReactElement => {
  const [isOpened, setOpened] = useState(opened ?? false);
  const togglerRef = useRef(null);
  const contentRef = useRef(null);

  const state = useMemo<DropdownContext>(
    () => ({
      isOpened,
      setOpened,
      togglerRef,
      contentRef,
    }),
    [isOpened, togglerRef, contentRef],
  );

  useClickOutside(contentRef, () => isOpened && setOpened(false));

  return (
    <DropdownContext.Provider value={state}>
      {children}
    </DropdownContext.Provider>
  );
};

export default Dropdown;
export {default as DropdownToggler} from './components/DropdownToggler';
export {default as DropdownItem} from './components/DropdownItem';
export {default as DropdownPortal} from './components/DropdownPortal';
