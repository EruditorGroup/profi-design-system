import React from 'react';
import cx from 'classnames';

import {Text} from '../../../Typography';

import styles from './Content.module.scss';

import type {TextProps} from '../../../Typography';

export const Caption: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text
      as="div"
      size="s"
      color="muted"
      className={cx(styles['caption'], className)}
      {...props}
    >
      {children}
    </Text>
  );
};
