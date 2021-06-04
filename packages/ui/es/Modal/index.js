function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useRef, forwardRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CSSTransition } from 'react-transition-group';
import { ArrowLeftIcon, CloseIcon } from '@eruditorgroup/profi-icons';
import BodyPortal from '../BodyPortal';
import Button from '../Button';
import Text from '../Typography/Text';
import { canUseDom } from '@eruditorgroup/profi-toolkit';
import classNames from 'classnames';

require("./Modal.module.build.css");

var styles = {
  "root": "root-3qHw0",
  "overlay": "overlay-1o53T",
  "modal": "modal-2h_Gm",
  "head": "head-1quAo",
  "button-icon": "button-icon-1ta2j",
  "right": "right-2qpKZ",
  "left": "left-1sRS1",
  "icon": "icon-1YUtM",
  "body": "body-2w9Kj",
  "body-withPadding": "body-withPadding-2HCxw",
  "autoSize": "autoSize-2EOcm"
};

require("styles/transitions/SlideUp.module.build.css");

var slideUpTransition = {};

require("styles/transitions/FadeIn.module.build.css");

var fadeInTransition = {};
const DEFAULT_ANIMATION_DURATION = 300;
const Modal = /*#__PURE__*/forwardRef(({
  width,
  height,
  autoSize,
  visible,
  title,
  children,
  className,
  withPadding = true,
  withCloseButton = true,
  onClose,
  onClickBack,
  ...props
}, ref) => {
  const bodyEl = useRef(null); // Отключаем промотку body

  useEffect(() => {
    visible ? disableBodyScroll(bodyEl.current) : enableBodyScroll(bodyEl.current);
  }, [visible]);
  if (!canUseDom()) return null;

  const handleCloseClick = event => {
    if (!event) return;
    event.stopPropagation();
    onClose(event);
  };

  const rootStyles = {
    width,
    height
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement(CSSTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    in: visible,
    timeout: DEFAULT_ANIMATION_DURATION,
    classNames: fadeInTransition
  }, /*#__PURE__*/React.createElement(BodyPortal, null, /*#__PURE__*/React.createElement("div", {
    className: styles['overlay'],
    onClick: handleCloseClick
  }))), /*#__PURE__*/React.createElement(CSSTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    in: visible,
    timeout: DEFAULT_ANIMATION_DURATION,
    classNames: slideUpTransition
  }, /*#__PURE__*/React.createElement(BodyPortal, {
    className: styles['root']
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['modal'], className, autoSize && styles['autoSize']),
    style: rootStyles
  }, onClickBack && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickBack,
    className: classNames(styles['button-icon'], styles['left'])
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null)), withCloseButton && /*#__PURE__*/React.createElement(Button, {
    onClick: handleCloseClick,
    className: classNames(styles['button-icon'], styles['right'])
  }, /*#__PURE__*/React.createElement(CloseIcon, null)), title && /*#__PURE__*/React.createElement("div", {
    className: styles['head']
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['body'], withPadding && styles['body-withPadding']),
    ref: bodyEl
  }, children)))));
});
export default Modal;