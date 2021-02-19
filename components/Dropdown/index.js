import React, { createContext, useState, useMemo, useRef } from 'react';
import useClickOutside from "@profiru/ui/hooks/useClickOutside";
export const DropdownContext = /*#__PURE__*/createContext(null);

const Dropdown = ({
  children,
  horizontalPosition = 'left',
  design = 'light'
}) => {
  const [isOpened, setOpened] = useState(false);
  const togglerRef = useRef(null);
  const contentRef = useRef(null);
  const state = useMemo(() => ({
    isOpened,
    setOpened,
    togglerRef,
    contentRef,
    design,
    horizontalPosition
  }), [isOpened, togglerRef, contentRef, design, horizontalPosition]);
  useClickOutside(contentRef, () => isOpened && setOpened(false));
  return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: state
  }, children);
};

export default Dropdown;
export { default as DropdownToggler } from './components/DropdownToggler';
export { default as DropdownItem } from './components/DropdownItem';
export { default as DropdownPortal } from './components/DropdownPortal';