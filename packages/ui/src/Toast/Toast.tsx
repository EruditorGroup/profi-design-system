import React, {ReactNode, useEffect} from 'react';
import styles from './Toast.module.scss';
import {ToastType} from './types';
import {destroyToast, hideToast} from './api';
import cn from 'classnames';
import {Text} from '../Typography';

export type ToastProps = {
  children: ReactNode;
} & Omit<ToastType, 'children'>;

const ANIMATION_DURATION = 400;

export const Toast = ({
  design = 'danger',
  visible,
  permanent,
  children,
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

  return (
    <div className={cn(styles['wrapper'], cn(styles[design]))}>
      {
        <Text size="xs" color={design === 'danger' ? 'brand' : 'light'}>
          {children}
        </Text>
      }
    </div>
  );
};
