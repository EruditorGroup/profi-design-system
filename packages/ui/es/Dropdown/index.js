import React, { createContext, useState, useMemo, useEffect, useRef, useCallback } from 'react';
import cx from 'classnames';
import DropdownToggler from './components/DropdownToggler';
import DropdownPortal from './components/DropdownPortal';
import DropdownItem from './components/DropdownItem';

require("./Dropdown.module.build.css");

var styles = {
  "relative": "relative-33HPb"
};
export const DropdownContext = /*#__PURE__*/createContext(null);

const Dropdown = ({
  children,
  onChange,
  className,
  trigger = 'click'
}) => {
  const [isOpened, setOpened] = useState(false);
  const dropdownRef = useRef(null);
  const context = useMemo(() => ({
    isOpened,
    setOpened,
    trigger
  }), [isOpened, trigger]);
  const onChangeRef = useRef();
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
  return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(className, styles['relative']),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ref: dropdownRef
  }, children));
};

Dropdown.Toggler = DropdownToggler;
Dropdown.Portal = DropdownPortal;
Dropdown.Item = DropdownItem;
export default Dropdown;