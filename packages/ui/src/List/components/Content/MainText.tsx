import cx from 'classnames';
import React from 'react';

import {Text} from '../../../Typography';
import {useListContext} from '../..';
import {useListItemContext} from '../ListItem';

import styles from './Content.module.scss';

import type {TextProps} from '../../../Typography';

export const MainText: React.FC<React.PropsWithChildren<TextProps>> = ({
  className,
  children,
  bold,
  ...props
}) => {
  const {size, boldItemMainText} = useListContext();
  const disabled = useListItemContext();

  return (
    <Text
      as="div"
      bold={bold ?? boldItemMainText}
      color={disabled ? 'disabled' : 'secondary'}
      size={size}
      className={cx(styles['main-text'], className)}
      {...props}
    >
      {children}
    </Text>
  );
};
