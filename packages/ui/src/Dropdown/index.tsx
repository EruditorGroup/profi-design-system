import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import DropdownToggler from './components/DropdownToggler';
import DropdownPortal from './components/DropdownPortal';
import cx from 'classnames';
import styles from './Dropdown.module.css';

export interface IDropdownContext {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export const DropdownContext = createContext<IDropdownContext | null>(null);

export type DropdownProps = {
  className?: string;
  onChange?: (opened: boolean) => void;
};

interface DropdownComponent extends React.FC<DropdownProps> {
  Toggler: typeof DropdownToggler;
  Portal: typeof DropdownPortal;
}

const Dropdown: DropdownComponent = ({children, onChange, className}) => {
  const [isOpened, setOpened] = useState(false);

  const context = useMemo<IDropdownContext>(() => ({isOpened, setOpened}), [
    isOpened,
  ]);

  const onChangeRef = useRef<DropdownProps['onChange']>();
  onChangeRef.current = onChange;

  useEffect(() => {
    if (onChangeRef.current) onChangeRef.current(isOpened);
  }, [isOpened]);

  return (
    <DropdownContext.Provider value={context}>
      <div className={cx(className, styles['relative'])}>{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Toggler = DropdownToggler;
Dropdown.Portal = DropdownPortal;

export default Dropdown;
