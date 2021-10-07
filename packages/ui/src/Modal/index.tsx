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
import Text from '../Typography/Text';

import {
  canUseDom,
  useClickOutside,
  useCombinedRef,
  theme,
} from '@eruditorgroup/profi-toolkit';

import classNames from 'classnames';

import styles from './Modal.module.scss';

// import slideUpTransition from '../styles/transitions/SlideUp.module.scss';
// import fadeInTransition from '../styles/transitions/FadeIn.module.scss';

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'width'> {
  fullscreen?: boolean;
  withCloseButton?: boolean;
  withPadding?: boolean;
  width?: string | number;
  visible: boolean;
  title?: string | undefined;
  closeOnOverlayClick?: boolean;
  onClickBack?: MouseEventHandler<HTMLElement>;
  onClose: MouseEventHandler<HTMLElement>;
  bodyClassName?: string;
}

const DEFAULT_ANIMATION_DURATION = 300;

const Modal: ForwardRefExoticComponent<
  ModalProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      width,
      visible,
      title,
      children,
      className,
      fullscreen,
      withPadding = true,
      withCloseButton = true,
      closeOnOverlayClick,
      bodyClassName,
      onClose,
      onClickBack,
      ...props
    },
    ref,
  ) => {
    const bodyEl = useRef(null);

    // Отключаем промотку body
    useEffect(() => {
      const {current: element} = bodyEl;
      visible ? disableBodyScroll(element) : enableBodyScroll(element);
      return () => enableBodyScroll(element);
    }, [visible]);

    const [modalRef, setModalRef] = useCombinedRef(ref);

    useClickOutside(modalRef, () => {
      closeOnOverlayClick && onClose(null);
    });

    if (!canUseDom()) return null;

    const handleCloseClick: MouseEventHandler<HTMLElement> = (event) => {
      if (!event) return;
      event.stopPropagation();
      onClose(event);
    };

    return (
      <>
        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={DEFAULT_ANIMATION_DURATION}
          classNames={theme.transitions.fade}
        >
          <BodyPortal>
            <div className={styles['overlay']} onClick={handleCloseClick} />
          </BodyPortal>
        </CSSTransition>

        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={!fullscreen ? DEFAULT_ANIMATION_DURATION : 0}
          classNames={theme.transitions.slide}
        >
          <BodyPortal
            className={classNames(
              styles['root'],
              fullscreen && styles['fullscreen'],
            )}
          >
            <div
              className={classNames(
                styles['modal'],
                fullscreen && styles['fullscreen'],
                className,
              )}
              style={{width: !fullscreen && width}}
              ref={setModalRef}
              {...props}
            >
              {onClickBack && (
                <Button
                  rounded
                  onClick={onClickBack}
                  className={classNames(styles['button-icon'], styles['left'])}
                >
                  <ArrowLeftIcon />
                </Button>
              )}

              {withCloseButton && (
                <Button
                  rounded
                  design="transparent"
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
                  fullscreen && styles['body_h100'],
                  bodyClassName,
                )}
                ref={bodyEl}
              >
                {children}
              </div>
            </div>
          </BodyPortal>
        </CSSTransition>
      </>
    );
  },
);

export default Modal;
