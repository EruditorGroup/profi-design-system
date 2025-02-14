import React, {useCallback, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {gestures, useDisableBodyScroll} from '@eruditorgroup/profi-toolkit';

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

interface CSSTransitionClassNames {
  appear?: string;
  appearActive?: string;
  appearDone?: string;
  enter?: string;
  enterActive?: string;
  enterDone?: string;
  exit?: string;
  exitActive?: string;
  exitDone?: string;
}

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
  animationClassName?: string | CSSTransitionClassNames;
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
      animationClassName,
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
    const bodyRef = React.useRef(null);
    const [modalRef, setModalRef] = useCombinedRef(ref);
    const modalContentRef = useRef<HTMLDivElement>(null);

    const [pc, setPc] = React.useState(0);
    const modalOpacity = visible ? 1 - pc / 100 : 0;
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
        target: modalRef,
      },
    );

    const handleClickOutside = useCallback(() => {
      if (visible && closeOnOverlayClick) {
        onClose(null);
      }
    }, [visible, closeOnOverlayClick, onClose]);

    useClickOutside(modalContentRef, handleClickOutside);

    if (!canUseDom()) return null;

    const handleCloseClick: MouseEventHandler<HTMLElement> = (event) => {
      if (!event) return;
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation(); // react 16 fix
      onClose(event);
    };

    const handleBackClick: MouseEventHandler<HTMLElement> = (event) => {
      if (!onClickBack || !event) return;
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      onClickBack(event);
    };

    return (
      <ModalContext.Provider
        value={{handleClose: handleCloseClick, handleBack: handleBackClick}}
      >
        <CSSTransition
          key="overlay"
          unmountOnExit
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
          key="content"
          unmountOnExit
          in={visible}
          timeout={!fullscreen ? DEFAULT_ANIMATION_DURATION : 0}
          classNames={animationClassName || theme.transitions.slide}
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
            ref={setModalRef}
          >
            <div
              className={classNames(
                styles['modal'],
                fullscreen && styles['fullscreen'],
                className,
              )}
              style={{width: !fullscreen && width}}
              ref={modalContentRef}
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
