import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
} from 'react';
import useClickOutside from 'hooks/useClickOutside';
import DropdownToggler from './components/DropdownToggler';
import DropdownItem from './components/DropdownItem';
import DropdownPortal from './components/DropdownPortal';

export interface DropdownProps {
  // verticalPosition?: 'top' | 'bottom';
  horizontalPosition?: 'left' | 'right';
  design?: 'light' | 'brand';
  children?: React.ReactNode;
}

interface DropdownContext extends Omit<DropdownProps, 'children'> {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  togglerRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLElement | null>;
}

export const DropdownContext = createContext<DropdownContext | null>(null);

const Dropdown = ({
  children,
  horizontalPosition = 'left',
  design = 'light',
}: DropdownProps): React.ReactElement => {
  const [isOpened, setOpened] = useState(false);
  const togglerRef = useRef(null);
  const contentRef = useRef(null);

  const state = useMemo<DropdownContext>(
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
};

Dropdown.Toggler = DropdownToggler;
Dropdown.Item = DropdownItem;
Dropdown.Portal = DropdownPortal;

export default Dropdown;
