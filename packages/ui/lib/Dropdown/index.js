"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropdownToggler = _interopRequireDefault(require("./components/DropdownToggler"));

var _DropdownPortal = _interopRequireDefault(require("./components/DropdownPortal"));

var _DropdownItem = _interopRequireDefault(require("./components/DropdownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = {
  "relative": "relative-33HPb"
};
const DropdownContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.DropdownContext = DropdownContext;

const Dropdown = ({
  children,
  onChange,
  className,
  trigger = 'click'
}) => {
  const [isOpened, setOpened] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)(null);
  const context = (0, _react.useMemo)(() => ({
    isOpened,
    setOpened,
    trigger
  }), [isOpened, trigger]);
  const onChangeRef = (0, _react.useRef)();
  onChangeRef.current = onChange;
  const onMouseEnter = (0, _react.useCallback)(() => {
    if (trigger !== 'hover') return;
    setOpened(true);
  }, [trigger]);
  const onMouseLeave = (0, _react.useCallback)(() => {
    if (trigger !== 'hover') return;
    setOpened(false);
  }, [trigger]);
  (0, _react.useEffect)(() => {
    if (onChangeRef.current) onChangeRef.current(isOpened);
  }, [isOpened]);
  return /*#__PURE__*/_react.default.createElement(DropdownContext.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, styles['relative']),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ref: dropdownRef
  }, children));
};

Dropdown.Toggler = _DropdownToggler.default;
Dropdown.Portal = _DropdownPortal.default;
Dropdown.Item = _DropdownItem.default;
var _default = Dropdown;
exports.default = _default;