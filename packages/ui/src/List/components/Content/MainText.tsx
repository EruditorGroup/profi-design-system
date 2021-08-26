import cx from 'classnames';
import {theme} from '@eruditorgroup/profi-toolkit';
import React from 'react';
import styles from './Content.module.scss';
import {useListContext} from '../..';
import {useListItemContext} from '../ListItem';

interface MainTextProps {
  bold?: boolean;
}

export const MainText: React.FC<MainTextProps> = ({children, bold}) => {
  const {size, boldItemMainText} = useListContext();
  const disabled = useListItemContext();
  const boldText = bold ?? boldItemMainText;

  return (
    <div
      className={cx(
        styles['main-text'],
        theme.common[`size-${size}`],
        theme.common[`color-${disabled ? 'disabled' : 'secondary'}`],
        boldText && theme.common['bold'],
      )}
    >
      {children}
    </div>
  );
};
