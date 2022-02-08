import React from 'react';
import cx from 'classnames';
import {theme} from '@eruditorgroup/profi-toolkit';
import {Text} from '../Typography';

import type {HTMLAttributes} from 'react';
import type {IColor} from '@eruditorgroup/profi-toolkit';

import styles from './Progress.module.scss';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  percent?: number;
  size?: number;
  color?: IColor;
  withAnimation?: boolean;
  showInfo?: boolean;
}

export default function Progress({
  percent = 0,
  size = 4,
  color = 'brand',
  showInfo = false,
  withAnimation,
  className,
  ...props
}: ProgressProps): JSX.Element {
  return (
    <div className={cx(styles['wrapper'], className)} {...props}>
      <div className={cx(styles['bar'], theme.common[`color-${color}`])}>
        <div
          className={cx(
            styles['background'],
            withAnimation && theme.transitions.skeleton,
          )}
          style={{width: `${percent}%`, height: `${size}px`}}
        />
      </div>
      {showInfo && <Text className={styles['text']}>{percent}%</Text>}
    </div>
  );
}
