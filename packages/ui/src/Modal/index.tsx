import React, {useEffect, useRef, forwardRef} from 'react';

import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  MouseEventHandler,
} from 'react';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {CSSTransition} from 'react-transition-group';

import {ArrowLeftIcon, CloseIcon} from '@eruditorgroup/profi-icons';

import BodyPortal from '../BodyPortal';
import Button from '../Button';
import Text from '../Text';

import {canUseDom} from '@eruditorgroup/profi-toolkit';

import classNames from 'classnames';

import styles from './Modal.module.scss';

import slideUpTransition from 'styles/transitions/SlideUp.module.scss';
import fadeInTransition from 'styles/transitions/FadeIn.module.scss';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  withCloseButton?: boolean;
  withPadding?: boolean;
  autoSize?: boolean;
  width: string;
  height: string;
  visible: boolean;
  title?: string | undefined;
  className?: string;
  onClickBack?: MouseEventHandler<HTMLElement>;
  onClose: MouseEventHandler<HTMLElement>;
}

const DEFAULT_ANIMATION_DURATION = 300;

const Modal: ForwardRefExoticComponent<
  ModalProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
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
    },
    ref,
  ) => {
    const bodyEl = useRef(null);

    // Отключаем промотку body
    useEffect(() => {
      visible
        ? disableBodyScroll(bodyEl.current)
        : enableBodyScroll(bodyEl.current);
    }, [visible]);

    if (!canUseDom()) return null;

    const handleCloseClick: MouseEventHandler<HTMLElement> = (event) => {
      if (!event) return;
      event.stopPropagation();
      onClose(event);
    };

    const rootStyles = {
      width,
      height,
    };

    return (
      <div ref={ref} {...props}>
        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={DEFAULT_ANIMATION_DURATION}
          classNames={fadeInTransition}
        >
          <BodyPortal>
            <div className={styles['overlay']} onClick={handleCloseClick} />
          </BodyPortal>
        </CSSTransition>

        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={DEFAULT_ANIMATION_DURATION}
          classNames={slideUpTransition}
        >
          <BodyPortal className={styles['root']}>
            <div
              className={classNames(
                styles['modal'],
                className,
                autoSize && styles['autoSize'],
              )}
              style={rootStyles}
            >
              {onClickBack && (
                <Button
                  onClick={onClickBack}
                  className={classNames(styles['button-icon'], styles['left'])}
                >
                  <ArrowLeftIcon />
                </Button>
              )}

              {withCloseButton && (
                <Button
                  onClick={handleCloseClick}
                  className={classNames(styles['button-icon'], styles['right'])}
                >
                  <CloseIcon />
                </Button>
              )}

              {title && (
                <div className={styles['head']}>
                  <Text bold>{title}</Text>
                </div>
              )}

              <div
                className={classNames(
                  styles['body'],
                  withPadding && styles['body-withPadding'],
                )}
                ref={bodyEl}
              >
                {children}
              </div>
            </div>
          </BodyPortal>
        </CSSTransition>
      </div>
    );
  },
);

export default Modal;
