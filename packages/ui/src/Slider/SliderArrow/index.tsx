import React from 'react';
import cx from 'classnames';

import {ChevronLeftIcon, ChevronRightIcon} from '@eruditorgroup/profi-icons';
import Button from '../../Button';

import type {ButtonProps} from '../../Button';
import type {MouseEventHandler} from 'react';

import styles from './SliderArrow.module.scss';

type Props = {
  direction: 'left' | 'right';
  visible?: boolean;
  withFill?: boolean;
  background?: string;
  arrowButton?: ButtonProps;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function compileGradient(
  color: string,
  direction: 'left' | 'right',
): {background: string} {
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
  arrowButton = {},
  withFill,
  className,
}: Props): JSX.Element {
  const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <div className={styles['wrapper']}>
      {background !== 'transparent' && (
        <>
          <div
            className={cx(
              styles['gradient'],
              styles[`gradient_${direction}`],
              visible && styles['gradient_show'],
              withFill && styles['shift'],
            )}
            style={compileGradient(background, direction)}
          />

          <div
            className={cx(
              styles['fill'],
              styles[`fill_${direction}`],
              visible && withFill && styles['fill_show'],
            )}
            style={{background}}
          />
        </>
      )}

      <Button
        rounded
        size="l"
        design="light"
        onClick={onClick}
        {...arrowButton}
        className={cx(
          styles['arrow'],
          styles[`arrow_${direction}`],
          {
            [styles['arrow_show']]: visible,
          },
          className,
        )}
      >
        <Icon />
      </Button>
    </div>
  );
}
