function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import classnames from 'classnames';

require("./BareTextarea.module.build.css");

var styles = {
  "textarea": "textarea-4CxXL"
};
const DEFAULT_TEXTAREA_ROWS = 3;

const BareTextarea = ({
  className,
  rows,
  minRows,
  maxRows,
  inputRef,
  ...props
}) => {
  if (rows !== undefined) {
    minRows = rows;
    maxRows = rows;
  } else if (minRows === undefined && maxRows === undefined) {
    minRows = DEFAULT_TEXTAREA_ROWS;
    maxRows = DEFAULT_TEXTAREA_ROWS;
  }

  return /*#__PURE__*/React.createElement(TextareaAutosize, _extends({}, props, {
    minRows: minRows,
    maxRows: maxRows,
    className: classnames(styles['textarea'], className),
    ref: el => {
      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (typeof inputRef === 'object' && inputRef !== null) {
        inputRef.current = el;
      }
    }
  }));
};

export default BareTextarea;