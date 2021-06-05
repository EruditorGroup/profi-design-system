import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from 'react';
import cx from 'classnames';

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

export const DropdownContext = createContext<IDropdownContext | null>(null);

export type DropdownProps = {
  className?: string;
  closeRefHandler?: MutableRefObject<(() => void) | undefined>;
  onChange?: (opened: boolean) => void;
  trigger?: 'click' | 'hover';
};

interface DropdownComponent extends React.FC<DropdownProps> {
  Toggler: typeof DropdownToggler;
  Portal: typeof DropdownPortal;
  Item: typeof DropdownItem;
}

const Dropdown: DropdownComponent = ({
  children,
  onChange,
  className,
  closeRefHandler,
  trigger = 'click',
}) => {
  const [isOpened, setOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const context = useMemo<IDropdownContext>(
    () => ({isOpened, setOpened, trigger}),
    [isOpened, trigger],
  );

  useMemo(
    () => closeRefHandler && (closeRefHandler.current = () => setOpened(false)),
    [closeRefHandler],
  );

  const onChangeRef = useRef<DropdownProps['onChange']>();
  onChangeRef.current = onChange;

  const onMouseEnter = useCallback(() => {
    if (trigger !== 'hover') return;
    setOpened(true);
  }, [trigger]);

  const onMouseLeave = useCallback(() => {
    if (trigger !== 'hover') return;
    setOpened(false);
  }, [trigger]);

  useEffect(() => {
    if (onChangeRef.current) onChangeRef.current(isOpened);
  }, [isOpened]);

  return (
    <DropdownContext.Provider value={context}>
      <div
        className={cx(className, styles['relative'])}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={dropdownRef}
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
