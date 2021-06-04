function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classnames from 'classnames';

require("./Notification.module.build.css");

var styles = {
  "notification": "notification-10_7J",
  "notification_disabled": "notification_disabled-3HFa7"
};

const Notification = ({
  className,
  disabled,
  children,
  ...htmlProps
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: classnames(styles['notification'], disabled && styles['notification_disabled'], className)
}, htmlProps), children);

export default Notification;