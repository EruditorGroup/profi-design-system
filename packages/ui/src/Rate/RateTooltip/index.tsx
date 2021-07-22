import React from 'react';

import Tooltip from '../../Tooltip';
import {Text} from '../../Typography';

import styles from './RateTooltip.module.scss';

type Props = {
  show: boolean;
  size: 's' | 'm' | 'l';
  children: React.ReactNode;
};

export default function WithTooltip({
  show,
  size,
  children,
}: Props): JSX.Element {
  if (show) {
    return (
      <Tooltip persist className={styles['tooltip']}>
        <Tooltip.Content
          className={styles['tooltipContent']}
          position="top-center"
        >
          <Text size={size} bold>
            Пять&nbsp;с&nbsp;плюсом
          </Text>
        </Tooltip.Content>
        {children}
      </Tooltip>
    );
  }

  return <>{children}</>;
}
