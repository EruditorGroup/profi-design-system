import React, {forwardRef, useEffect, useState} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Spinner.module.scss';
import common from '../styles/common.module.css';
import {IColor, ISize} from '@eruditorgroup/profi-toolkit';

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    RefAttributes<HTMLDivElement> {
  color?: IColor;
  delay?: number;
  speed?: number;
  size?: ISize;
  withRightPadding?: boolean;
  withLeftPadding?: boolean;
}

const Spinner: ForwardRefExoticComponent<SpinnerProps> = forwardRef(
  (
    {
      withLeftPadding,
      withRightPadding,
      speed,
      color,
      delay,
      size,
      className,
      ...props
    }: SpinnerProps,
    ref,
  ) => {
    const [showed, setShowed] = useState(!delay);

    useEffect(() => {
      if (delay) {
        const timeout = setTimeout(() => setShowed(true), delay);
        return () => clearTimeout(timeout);
      }
    }, [delay, setShowed]);

    return (
      <div
        className={classnames(styles['inner'], showed && className, {
          [styles['showed']]: showed,
          [styles['withRightPadding']]: withRightPadding,
          [styles['withLeftPadding']]: withLeftPadding,
          [common[`size-${size}`]]: size,
          [common[`color-${color}`]]: color,
        })}
        {...props}
      >
        <span
          style={{transitionDuration: speed ? `${speed}ms` : undefined}}
          className={classnames(styles['spinner'])}
          ref={ref}
        />
      </div>
    );
  },
);

export default Spinner;
