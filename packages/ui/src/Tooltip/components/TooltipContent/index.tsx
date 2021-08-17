import React, {forwardRef} from 'react';
import {useTooltipContext} from '../../index';
import classNames from 'classnames';

import type {
  RefAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';

import styles from './TooltipContent.module.scss';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  fit?: boolean;
  overlayClassName?: string;
  position?:
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-left'
    | 'top-right'
    | 'top-center';
}

const TooltipContent: ForwardRefExoticComponent<
  TooltipProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      animated = true,
      position = 'bottom-left',
      fit,
      className,
      overlayClassName,
      ...props
    },
    ref,
  ) => {
    const {opened} = useTooltipContext();

    return (
      <div
        className={classNames(
          styles['inner'],
          styles[`position-${position}`],
          opened && styles['opened'],
          animated && styles['animated'],
          overlayClassName,
        )}
      >
        <div
          className={classNames(
            className,
            styles['content'],
            fit && styles['fit'],
          )}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

export default TooltipContent;
