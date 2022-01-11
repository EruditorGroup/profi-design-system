import React, {forwardRef, useMemo} from 'react';
import {useTooltipContext} from '../../index';
import classNames from 'classnames';

import type {
  RefAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';

import styles from './TooltipContent.module.scss';
import {AliasProps} from '@eruditorgroup/profi-toolkit';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  fit?: boolean;
  overlayClassName?: string;
  withArrow?: boolean;
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
      withArrow,
      ...props
    },
    ref,
  ) => {
    const {opened} = useTooltipContext();
    const isBottom = useMemo(
      () => ['bottom-left', 'bottom-right', 'bottom-center'].includes(position),
      [position],
    );
    const isTop = useMemo(
      () => ['top-left', 'top-right', 'top-center'].includes(position),
      [position],
    );

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
          className={classNames(className, styles['content'], {
            [styles['fit']]: fit,
            [styles['withArrow']]: withArrow,
            [styles['withArrow-top']]: withArrow && isTop,
            [styles['withArrow-bottom']]: withArrow && isBottom,
          })}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

export default TooltipContent;
