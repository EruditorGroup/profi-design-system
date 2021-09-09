import React, {useEffect, useRef, forwardRef} from 'react';

import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  MouseEventHandler,
} from 'react';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {CSSTransition} from 'react-transition-group';
import cx from 'classnames';

import {
  canUseDom,
  useClickOutside,
  useCombinedRef,
  theme,
} from '@eruditorgroup/profi-toolkit';

import BodyPortal from '../BodyPortal';

import styles from './BottomSheet.module.scss';

export interface BottomSheetProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'width'> {
  withPadding?: boolean;
  visible: boolean;
  closeOnOverlayClick?: boolean;
  onClose: MouseEventHandler<HTMLElement>;
}

const DEFAULT_ANIMATION_DURATION = 300;

const BottomSheet: ForwardRefExoticComponent<
  BottomSheetProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      visible,
      children,
      className,
      withPadding = true,
      closeOnOverlayClick,
      onClose,
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

    const [sheetRef, setSheetRef] = useCombinedRef(ref);

    useClickOutside(sheetRef, () => {
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
          timeout={DEFAULT_ANIMATION_DURATION}
          classNames={theme.transitions.slide}
        >
          <BodyPortal className={cx(styles['root'])}>
            <div
              className={cx(styles['sheet'], className)}
              ref={setSheetRef}
              {...props}
            >
              <div
                className={cx(
                  styles['body'],
                  withPadding && styles['body_withPadding'],
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

export default BottomSheet;
