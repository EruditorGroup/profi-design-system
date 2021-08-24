import React from 'react';
import cx from 'classnames';

import {ChevronLeftIcon, ChevronRightIcon} from '@eruditorgroup/profi-icons';
import Button from '../../Button';

import type {MouseEventHandler} from 'react';

import styles from './SliderArrow.module.scss';

type Props = {
  direction: 'left' | 'right';
  visible?: boolean;
  background?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function compileGradient(
  color: string,
  direction: 'left' | 'right',
): {background: string} {
  if (color === 'transparent') return undefined;

  return {
    background: `linear-gradient(${
      direction === 'left' ? '270deg' : '90deg'
    }, rgba(250, 250, 250, 0) 0%, ${color} 100%)`,
  };
}

export default function SliderArrow({
  direction,
  visible,
  onClick,
  background = '#fff',
}: Props): JSX.Element {
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <div className={styles['wrapper']}>
      <div
        className={cx(
          styles['gradient'],
          styles[`gradient_${direction}`],
          visible && styles['gradient_show'],
        )}
        style={compileGradient(background, direction)}
      />
      <Button
        rounded
        size="l"
        design="light"
        onClick={onClick}
        className={cx(styles['arrow'], styles[`arrow_${direction}`], {
          [styles['arrow_show']]: visible,
        })}
      >
        <Icon />
      </Button>
    </div>
  );
}
