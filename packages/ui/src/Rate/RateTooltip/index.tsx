import React from 'react';

import Tooltip from '../../Tooltip';
import {Text} from '../../Typography';

import type {ITrigger} from '../../Tooltip';

import styles from './RateTooltip.module.scss';

type Props = {
  show: boolean;
  children: React.ReactNode;
  trigger?: ITrigger;
};

export default function RateTooltip({
  show,
  children,
  trigger = 'hover',
}: Props): JSX.Element {
  if (show) {
    return (
      <Tooltip persist trigger={trigger} className={styles['tooltip']}>
        <Tooltip.Content
          className={styles['tooltipContent']}
          overlayClassName={styles['tooltipOverlay']}
          position="top-center"
        >
          <Text size="m" bold>
            Пять&nbsp;с&nbsp;плюсом
          </Text>
        </Tooltip.Content>
        <Tooltip.Toggler>{children}</Tooltip.Toggler>
      </Tooltip>
    );
  }

  return <>{children}</>;
}
