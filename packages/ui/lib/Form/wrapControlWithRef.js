"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profiToolkit = require("@eruditorgroup/profi-toolkit");

var _FormControl = _interopRequireDefault(require("./FormControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GLOBAL_ID_PREFIX = 'profi-ui-';
let globalIdCount = 0;

const controlFactory = Component => (props, ref) => {
  const {
    withFloatLabel,
    size = 'l',
    block = true,
    invalid,
    disabled,
    style,
    leading,
    trailing,
    id,
    className,
    placeholder,
    value,
    defaultValue,
    onFocus,
    onBlur,
    ...restInputProps
  } = props;
  const inputId = (0, _react.useMemo)(() => id || `${GLOBAL_ID_PREFIX}${globalIdCount++}`, [id]);
  const [isFloated, focusHandlers] = (0, _profiToolkit.useFloatLabel)(Boolean(value || defaultValue), {
    onFocus,
    onBlur
  });
  const internalRef = (0, _react.useRef)(null);
  const inputRef = (0, _react.useMemo)(() => ref || internalRef, [ref]);
  const onWrapperClick = (0, _react.useCallback)(() => {
    if (typeof inputRef === 'object' && inputRef !== null) {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }
  }, [inputRef]);
  const wrapperProps = {
    className,
    label: withFloatLabel ? placeholder : undefined,
    withFloatLabel,
    isLabelFloated: isFloated,
    size: size,
    block,
    invalid,
    disabled,
    style,
    leading,
    trailing
  };
  const inputProps = {
    id: inputId,
    value,
    defaultValue,
    disabled,
    placeholder: withFloatLabel ? '' : placeholder,
    ...focusHandlers,
    ...restInputProps
  };
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, _extends({
    labelFor: inputId,
    onClick: onWrapperClick
  }, wrapperProps), /*#__PURE__*/_react.default.createElement(Component, _extends({}, inputProps, {
    inputRef: inputRef
  })));
};

var _default = controlFactory;
exports.default = _default;