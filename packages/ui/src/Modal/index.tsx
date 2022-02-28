import * as React from 'react';
import {CSSTransition} from 'react-transition-group';
import {gestures, useDisableBodyScroll} from '@eruditorgroup/profi-toolkit';

import {ArrowLeftIcon} from '@eruditorgroup/profi-icons';

import BodyPortal from '../BodyPortal';
import CloseButton from './components/CloseButton';
import BackButton from './components/BackButton';
import Text from '../Typography/Text';

import {
  canUseDom,
  useClickOutside,
  useCombinedRef,
  theme,
} from '@eruditorgroup/profi-toolkit';

import classNames from 'classnames';

import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  MouseEventHandler,
} from 'react';

import styles from './Modal.module.scss';
import {ModalContext} from './context';

// import slideUpTransition from '../styles/transitions/SlideUp.module.scss';
// import fadeInTransition from '../styles/transitions/FadeIn.module.scss';

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'width'> {
  fullscreen?: boolean;
  withPadding?: boolean;
  width?: string | number;
  visible: boolean;
  title?: string | undefined;
  closeOnOverlayClick?: boolean;
  swipeDownToClose?: boolean;
  bodyClassName?: string;
  withOverlay?: boolean;
  onClickBack?: MouseEventHandler<HTMLElement>;
  onClose: MouseEventHandler<HTMLElement>;
}

const DEFAULT_ANIMATION_DURATION = 300;

interface ModalComponent
  extends ForwardRefExoticComponent<
    ModalProps & RefAttributes<HTMLDivElement>
  > {
  CloseButton: typeof CloseButton;
  BackButton: typeof BackButton;
}

const Modal = React.forwardRef(
  (
    {
      visible,
      title,
      className,
      bodyClassName,
      width,
      children,
      fullscreen,
      closeOnOverlayClick,
      withPadding = true,
      swipeDownToClose = false,
      withOverlay = true,
      onClose,
      onClickBack,
      ...props
    },
    ref,
  ) => {
    const rootRef = React.useRef(null);
    const bodyRef = React.useRef(null);
    const [modalRef, setModalRef] = useCombinedRef(ref);

    const [pc, setPc] = React.useState(0);
    const modalOpacity = 1 - pc / 100;
    const showOverlay = !!pc || !withOverlay;

    useDisableBodyScroll(bodyRef, visible);

    gestures.useDrag(
      ({movement: [, my], active, currentTarget: el}) => {
        const pc = Math.max(0, (my / window.innerHeight) * 100);
        if (active) {
          setPc(pc);
        } else if (pc > 10) {
          setPc(100);
          el.addEventListener('transitionend', function handleTransitionEnd() {
            el.removeEventListener('transitionend', handleTransitionEnd);
            onClose(null);
            setPc(0);
          });
        } else {
          setPc(0);
        }
      },
      {
        axis: 'y',
        enabled: swipeDownToClose,
        target: rootRef,
      },
    );

    useClickOutside(modalRef, () => {
      closeOnOverlayClick && onClose(null);
    });

    if (!canUseDom()) return null;

    const handleCloseClick: MouseEventHandler<HTMLElement> = (event) => {
      if (!event) return;
      event.stopPropagation();
      onClose(event);
    };

    const handleBackClick: MouseEventHandler<HTMLElement> = (event) => {
      if (!onClickBack || !event) return;
      event.stopPropagation();
      onClickBack(event);
    };

    return (
      <ModalContext.Provider
        value={{handleClose: handleCloseClick, handleBack: handleBackClick}}
      >
        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={DEFAULT_ANIMATION_DURATION}
          classNames={theme.transitions.fade}
        >
          <BodyPortal>
            <div
              className={styles['overlay']}
              onClick={handleCloseClick}
              {...(showOverlay && {style: {display: 'none'}})}
            />
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
            style={{
              transform: `translate3d(0, ${pc}%, 0) scale(${Math.max(
                0.9,
                modalOpacity,
              )})`,
              opacity: `${modalOpacity}`,
            }}
            ref={rootRef}
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
                ref={bodyRef}
              >
                {children}
              </div>
            </div>
          </BodyPortal>
        </CSSTransition>
      </ModalContext.Provider>
    );
  },
) as ModalComponent;

Modal.CloseButton = CloseButton;
Modal.BackButton = BackButton;

export default Modal;
