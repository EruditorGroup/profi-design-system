import React, {ReactNode, useEffect} from 'react';
import styles from './Toast.module.scss';
import {ToastType} from './types';
import {destroyToast, hideToast} from './api';
import cn from 'classnames';
import {Text} from '../Typography';
import {CloseIcon} from '@eruditorgroup/profi-icons';
export {showToast, hideToast, destroyToast} from './api';
export {ToastController} from './controller';

export type ToastProps = {
  children: ReactNode;
  className?: string;
} & Omit<ToastType, 'children'>;

const ANIMATION_DURATION = 400;

export const Toast = ({
  design = 'danger',
  visible,
  permanent,
  children,
  className,
  withCloseIcon = false,
  duration = 3000,
}: ToastProps) => {
  useEffect(() => {
    if (visible && !permanent) {
      const timeout = setTimeout(hideToast, duration);
      return () => clearTimeout(timeout);
    }
    return;
  }, [visible, permanent, duration]);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => destroyToast(), ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
    return;
  }, [visible]);

  const contentColor = design === 'danger' ? 'secondary' : 'white';

  return (
    <div
      className={cn(
        styles['wrapper'],
        styles[design],
        {
          [styles['not-visible']]: !visible,
        },
        className,
      )}
    >
      <Text size="m" color={contentColor}>
        {children}
      </Text>
      {withCloseIcon && (
        <div className={styles['close-icon']} onClick={hideToast}>
          <CloseIcon color={contentColor} style={{fontSize: '8xp'}} />
        </div>
      )}
    </div>
  );
};
