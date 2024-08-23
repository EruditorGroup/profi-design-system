import React, {useState, useEffect} from 'react';
import {Toast} from './Toast';

import type {ToastType} from './types';
import {setApi} from './api';

export const ToastController: React.FC = () => {
  const [toast, setToast] = useState<ToastType | null>(null);

  useEffect(() => {
    setApi({
      showToast: (child, props = {}) => {
        setToast({
          ...props,
          child,
          visible: true,
          design: props.design || 'default',
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

  return toast && <Toast {...toast}>{toast.child}</Toast>;
};
