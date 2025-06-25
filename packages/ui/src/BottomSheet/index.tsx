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
import animation from './animation.module.scss';

export interface BottomSheetProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'width'> {
  withPadding?: boolean;
  bg?: 'primary' | 'default' | 'light'; // TODO: move to common
  visible: boolean;
  closeOnOverlayClick?: boolean;
  inline?: boolean;
  onClose: MouseEventHandler<HTMLElement>;
  rootClassName?: string;
  overlayClassName?: string;
}

const DEFAULT_ANIMATION_DURATION = 150;

const BottomSheet: ForwardRefExoticComponent<
  BottomSheetProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      visible,
      bg = 'primary',
      children,
      className,
      withPadding = true,
      closeOnOverlayClick,
      onClose,
      inline,
      rootClassName,
      overlayClassName,
      ...props
    },
    ref,
  ) => {
    const bodyEl = useRef(null);

    // Отключаем промотку body
    useEffect(() => {
      if (!inline) {
        const {current: element} = bodyEl;
        visible ? disableBodyScroll(element) : enableBodyScroll(element);
        return () => enableBodyScroll(element);
      }
    }, [visible, inline]);

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
        {!inline && (
          <CSSTransition
            unmountOnExit
            mountOnEnter
            in={visible}
            timeout={DEFAULT_ANIMATION_DURATION}
            classNames={theme.transitions.fade}
          >
            <BodyPortal>
              <div
                className={cx(styles['overlay'], overlayClassName)}
                onClick={handleCloseClick}
              />
            </BodyPortal>
          </CSSTransition>
        )}

        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={DEFAULT_ANIMATION_DURATION}
          classNames={animation}
        >
          <BodyPortal className={cx(!inline && styles['root'], rootClassName)}>
            <div
              className={cx(
                styles['sheet'],
                inline && styles['sheet-fixed'],
                styles[`bg-${bg}`],
                className,
              )}
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
