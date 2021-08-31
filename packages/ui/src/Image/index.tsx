import React, {useState, forwardRef} from 'react';
import cx from 'classnames';
import {ISize, theme} from '@eruditorgroup/profi-toolkit';

import styles from './Image.module.scss';

import type {
  ImgHTMLAttributes,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  radius?: ISize;
  lazy?: boolean;
  fallback?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  fit?: 'fill' | 'contain' | 'cover';
}

const Image: ForwardRefExoticComponent<
  ImageProps & RefAttributes<HTMLImageElement>
> = forwardRef(
  (
    {
      src,
      lazy,
      radius,
      className,
      fit,
      fallback,
      onError: onErrorProp,
      ...props
    },
    ref,
  ) => {
    const [isFailed, setFailed] = useState(false);

    const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (onErrorProp) {
        onErrorProp(e);
      }
      setFailed(true);
    };

    return (
      <img
        ref={ref}
        loading={lazy ? 'lazy' : 'eager'}
        className={cx(
          radius && theme.common[`radius-${radius}`],
          fit && styles[`fit-${fit}`],
          className,
        )}
        {...(isFailed && fallback
          ? {
              src: fallback,
            }
          : {onError, src})}
        {...props}
      />
    );
  },
);

export default Image;
