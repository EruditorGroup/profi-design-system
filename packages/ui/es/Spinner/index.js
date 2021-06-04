function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useEffect, useState } from 'react';
import classnames from 'classnames';

require("./Spinner.module.build.css");

var styles = {
  "spinner": "spinner-FTm7B",
  "spin": "spin-1Gr5i",
  "inner": "inner-fKh5y",
  "showed": "showed-33tG1",
  "withRightPadding": "withRightPadding-2TjSY",
  "withLeftPadding": "withLeftPadding-18MWx"
};

require("../styles/common.module.build.css");

var common = {
  "color-brand": "color-brand-h5Cyd",
  "color-primary": "color-primary-A7lMg",
  "color-secondary": "color-secondary-2cS18",
  "color-light": "color-light-2laSu",
  "color-danger": "color-danger-12hTX",
  "color-success": "color-success-2wEne",
  "color-warning": "color-warning-Hpz_8",
  "size-xs": "size-xs-3yjq_",
  "size-s": "size-s-3zQju",
  "size-m": "size-m-2guU_",
  "size-l": "size-l-2R6Zj",
  "size-xl": "size-xl-3UmLL",
  "size-xxl": "size-xxl-2nH5c",
  "size-huge": "size-huge-1MGuM"
};
const Spinner = /*#__PURE__*/forwardRef(({
  withLeftPadding,
  withRightPadding,
  speed,
  color,
  delay,
  size,
  className,
  ...props
}, ref) => {
  const [showed, setShowed] = useState(!delay);
  useEffect(() => {
    if (delay) {
      const timeout = setTimeout(() => setShowed(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [delay, setShowed]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classnames(styles['inner'], showed && className, {
      [styles['showed']]: showed,
      [styles['withRightPadding']]: withRightPadding,
      [styles['withLeftPadding']]: withLeftPadding,
      [common[`size-${size}`]]: size,
      [common[`color-${color}`]]: color
    })
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      transitionDuration: speed ? `${speed}ms` : undefined
    },
    className: classnames(styles['spinner']),
    ref: ref
  }));
});
export default Spinner;