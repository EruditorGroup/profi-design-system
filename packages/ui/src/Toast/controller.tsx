import React, {useState, useEffect} from 'react';
import {Toast, ToastProps} from './index';

import type {ToastType} from './types';
import {setApi} from './api';

type Props = Pick<ToastProps, 'className'>;

export const ToastController: React.FC<Props> = ({className}) => {
  const [toast, setToast] = useState<ToastType | null>(null);

  useEffect(() => {
    setApi({
      showToast: (child, props = {}) => {
        setToast({
          ...props,
          child,
          visible: true,
          design: props.design || 'danger',
        });
      },

      hideToast: () => {
        setToast((prevToast) =>
          prevToast ? {...prevToast, visible: false} : null,
        );
      },

      destroyToast: () => setToast(null),
    });
  }, []);

  return (
    toast && (
      <Toast className={className} {...toast}>
        {toast.child}
      </Toast>
    )
  );
};
