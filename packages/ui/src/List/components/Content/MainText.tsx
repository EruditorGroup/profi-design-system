import cx from 'classnames';
import React from 'react';

import {Text} from '../../../Typography';
import {useListContext} from '../..';
import {useListItemContext} from '../ListItem';

import styles from './Content.module.scss';

interface MainTextProps {
  className?: string;
  bold?: boolean;
}

export const MainText: React.FC<MainTextProps> = ({
  className,
  children,
  bold,
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
    >
      {children}
    </Text>
  );
};
