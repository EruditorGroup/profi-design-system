import React, {forwardRef, HTMLAttributes} from 'react';
import cx from 'classnames';

import Tooltip from '../../Tooltip';
import {Text} from '../../Typography';

import type {ITrigger} from '../../Tooltip';

import styles from './RateTooltip.module.scss';

type Props = {
  show: boolean;
  trigger?: ITrigger;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const RateTooltip = forwardRef<HTMLDivElement, Props>(
  ({show, children, className, trigger = 'hover', ...props}, ref) => {
    return (
      <Tooltip
        persist
        trigger={trigger}
        className={cx(styles['tooltip'], className)}
        {...props}
        ref={ref}
      >
        {show && (
          <Tooltip.Content
            className={styles['tooltipContent']}
            overlayClassName={styles['tooltipOverlay']}
            position="top-center"
          >
            <Text size="m" bold>
              Пять&nbsp;с&nbsp;плюсом
            </Text>
          </Tooltip.Content>
        )}
        <Tooltip.Toggler className={styles['toggler']}>
          {children}
        </Tooltip.Toggler>
      </Tooltip>
    );
  },
);

export default RateTooltip;
